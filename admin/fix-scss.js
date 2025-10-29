const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// 递归获取所有Vue文件
async function getAllVueFiles(dir) {
  const files = await readdir(dir);
  const vueFiles = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      const subFiles = await getAllVueFiles(filePath);
      vueFiles.push(...subFiles);
    } else if (file.endsWith('.vue')) {
      vueFiles.push(filePath);
    }
  }
  
  return vueFiles;
}

// 修复SCSS中的/deep/语法
async function fixDeepSelector(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // 检查文件是否包含<style lang="scss">和/deep/
    if (content.includes('<style lang="scss">') && content.includes('/deep/')) {
      // 替换 & /deep/ 为 ::v-deep
      const fixedContent = content.replace(/& \/deep\//g, '::v-deep');
      
      // 保存修改后的文件
      await writeFile(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return false;
  }
}

// 主函数
async function main() {
  try {
    const srcDir = path.resolve(__dirname, 'src');
    const vueFiles = await getAllVueFiles(srcDir);
    console.log(`Found ${vueFiles.length} Vue files`);
    
    let fixedCount = 0;
    for (const file of vueFiles) {
      const fixed = await fixDeepSelector(file);
      if (fixed) fixedCount++;
    }
    
    console.log(`Fixed ${fixedCount} files with SCSS /deep/ selector issues`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();

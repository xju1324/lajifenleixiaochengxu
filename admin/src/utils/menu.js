const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"字典管理",
                        "menuJump":"列表",
                        "tableName":"dictionary"
                    },
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"性别管理",
                        "menuJump":"列表",
                        "tableName":"dictionarySex"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	// ,{
	//     "backMenu":[
	// 		{
	// 		    "child":[
	// 		        {
	// 		            "buttons":[
	// 		                "查看"
	// 		            ],
	// 		            "menu":"论坛管理",
	// 		            "menuJump":"列表",
	// 		            "tableName":"forum"
	// 		        }
	// 		    ],
	// 		    "menu":"论坛管理"
	// 		}
	// 		,{
	// 		    "child":[
	// 		        {
	// 		            "buttons":[
	// 		                "查看"
	// 		            ],
	// 		            "menu":"垃圾信息管理",
	// 		            "menuJump":"列表",
	// 		            "tableName":"lajixinxi"
	// 		        }
	// 		        ,
	// 		        {
	// 		            "buttons":[
	// 		                "查看",
	// 		                "删除"
	// 		            ],
	// 		            "menu":"垃圾信息留言管理",
	// 		            "menuJump":"列表",
	// 		            "tableName":"lajixinxiLiuyan"
	// 		        }
	// 		    ],
	// 		    "menu":"垃圾信息管理"
	// 		}
	// 		,{
	// 		    "child":[
	// 		        {
	// 		            "buttons":[
	// 		                "查看"
	// 		            ],
	// 		            "menu":"新闻信息管理",
	// 		            "menuJump":"列表",
	// 		            "tableName":"news"
	// 		        }
	// 		    ],
	// 		    "menu":"新闻信息管理"
	// 		},
	//         {
	//             "child":[
 //                    {
	//                     "buttons":[
 //                            "查看",
 //                            "评测"
	//                     ],
	//                     "menu":"评测管理",
	//                     "menuJump":"列表",
	//                     "tableName":"exampaper"
	//                 },
	//                 {
	//                     "buttons":[
	//                         "查看"
	//                     ],
	//                     "menu":"评测记录",
	//                     "menuJump":"列表",
	//                     "tableName":"examrecord"
	//                 }
	//             ],
	//             "menu":"评测管理"
	//         }
	//     ],
 //        "frontMenu":[],
 //        "hasBackLogin":"是",
 //        "hasBackRegister":"否",
 //        "hasFrontLogin":"否",
 //        "hasFrontRegister":"否",
 //        "roleName":"用户",
 //        "tableName":"yonghu"
	// }
]
    }
}
export default menu;

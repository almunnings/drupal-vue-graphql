export default {
    "scalars": [
        1,
        11,
        13,
        14,
        17,
        19,
        20,
        21,
        24,
        27,
        43,
        70,
        80,
        88,
        89,
        90,
        94,
        95,
        97,
        98
    ],
    "types": {
        "Address": {
            "additionalName": [
                80
            ],
            "addressLine1": [
                80
            ],
            "addressLine2": [
                80
            ],
            "administrativeArea": [
                80
            ],
            "countryCode": [
                80
            ],
            "dependentLocality": [
                80
            ],
            "familyName": [
                80
            ],
            "givenName": [
                80
            ],
            "langcode": [
                80
            ],
            "locality": [
                80
            ],
            "organization": [
                80
            ],
            "postalCode": [
                80
            ],
            "sortingCode": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Attributes": {},
        "Block": {
            "id": [
                21
            ],
            "render": [
                20
            ],
            "title": [
                80
            ],
            "on_BlockContent": [
                3
            ],
            "on_BlockPlugin": [
                9
            ],
            "__typename": [
                80
            ]
        },
        "BlockContent": {
            "entity": [
                7
            ],
            "id": [
                21
            ],
            "render": [
                20
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "BlockContentAnotherType": {
            "body": [
                87
            ],
            "changed": [
                15
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "reusable": [
                11
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "BlockContentBasicBlock": {
            "body": [
                87
            ],
            "changed": [
                15
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "reusable": [
                11
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "BlockContentInterface": {
            "changed": [
                15
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "reusable": [
                11
            ],
            "title": [
                80
            ],
            "on_BlockContentAnotherType": [
                4
            ],
            "on_BlockContentBasicBlock": [
                5
            ],
            "__typename": [
                80
            ]
        },
        "BlockContentUnion": {
            "on_BlockContentAnotherType": [
                4
            ],
            "on_BlockContentBasicBlock": [
                5
            ],
            "on_BlockContentInterface": [
                6
            ],
            "on_Node": [
                54
            ],
            "__typename": [
                80
            ]
        },
        "BlockField": {
            "block": [
                2
            ],
            "configuration": [
                1
            ],
            "plugin_id": [
                21
            ],
            "__typename": [
                80
            ]
        },
        "BlockPlugin": {
            "id": [
                21
            ],
            "render": [
                20
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "BlockUnion": {
            "on_BlockContent": [
                3
            ],
            "on_BlockPlugin": [
                9
            ],
            "on_Block": [
                2
            ],
            "on_Node": [
                54
            ],
            "__typename": [
                80
            ]
        },
        "Boolean": {},
        "Connection": {
            "edges": [
                16
            ],
            "nodes": [
                54
            ],
            "pageInfo": [
                60
            ],
            "on_NodePageConnection": [
                57
            ],
            "__typename": [
                80
            ]
        },
        "ConnectionSortKeys": {},
        "Cursor": {},
        "DateTime": {
            "offset": [
                97
            ],
            "time": [
                88
            ],
            "timestamp": [
                90
            ],
            "timezone": [
                89
            ],
            "__typename": [
                80
            ]
        },
        "Edge": {
            "cursor": [
                14
            ],
            "node": [
                54
            ],
            "on_NodePageEdge": [
                58
            ],
            "__typename": [
                80
            ]
        },
        "Email": {},
        "File": {
            "description": [
                80
            ],
            "mime": [
                80
            ],
            "name": [
                80
            ],
            "size": [
                27
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Float": {},
        "Html": {},
        "ID": {},
        "Image": {
            "alt": [
                80
            ],
            "height": [
                27
            ],
            "mime": [
                80
            ],
            "title": [
                80
            ],
            "url": [
                80
            ],
            "variations": [
                25,
                {
                    "styles": [
                        24,
                        "[ImageStyleAvailable]"
                    ]
                }
            ],
            "width": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "ImageStyle": {
            "id": [
                21
            ],
            "name": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ImageStyleAvailable": {},
        "ImageStyleDerivative": {
            "height": [
                27
            ],
            "name": [
                80
            ],
            "url": [
                80
            ],
            "width": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "ImageStyleUnion": {
            "on_ImageStyle": [
                23
            ],
            "__typename": [
                80
            ]
        },
        "Int": {},
        "Language": {
            "direction": [
                80
            ],
            "id": [
                21
            ],
            "name": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Layout": {
            "category": [
                80
            ],
            "defaultRegion": [
                80
            ],
            "id": [
                21
            ],
            "label": [
                80
            ],
            "regions": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "LayoutParagraphs": {
            "layout": [
                29
            ],
            "position": [
                32
            ],
            "__typename": [
                80
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                30
            ],
            "on_ParagraphBlock": [
                61
            ],
            "on_ParagraphCallToAction": [
                62
            ],
            "on_ParagraphMedia": [
                64
            ],
            "on_ParagraphQuote": [
                65
            ],
            "on_ParagraphSection": [
                66
            ],
            "on_ParagraphTable": [
                67
            ],
            "on_ParagraphText": [
                68
            ],
            "__typename": [
                80
            ]
        },
        "LayoutParagraphsPosition": {
            "parentId": [
                21
            ],
            "region": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "LayoutPosition": {
            "parentId": [
                21
            ],
            "region": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Link": {
            "route": [
                78
            ],
            "title": [
                80
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MediaAudio": {
            "audio": [
                18
            ],
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "name": [
                80
            ],
            "status": [
                11
            ],
            "__typename": [
                80
            ]
        },
        "MediaDocument": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "document": [
                18
            ],
            "id": [
                21
            ],
            "name": [
                80
            ],
            "status": [
                11
            ],
            "__typename": [
                80
            ]
        },
        "MediaImage": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "image": [
                22
            ],
            "name": [
                80
            ],
            "status": [
                11
            ],
            "__typename": [
                80
            ]
        },
        "MediaInterface": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "name": [
                80
            ],
            "status": [
                11
            ],
            "on_MediaAudio": [
                35
            ],
            "on_MediaDocument": [
                36
            ],
            "on_MediaImage": [
                37
            ],
            "on_MediaRemoteVideo": [
                39
            ],
            "on_MediaVideo": [
                41
            ],
            "__typename": [
                80
            ]
        },
        "MediaRemoteVideo": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "name": [
                80
            ],
            "status": [
                11
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MediaUnion": {
            "on_MediaAudio": [
                35
            ],
            "on_MediaDocument": [
                36
            ],
            "on_MediaImage": [
                37
            ],
            "on_MediaRemoteVideo": [
                39
            ],
            "on_MediaVideo": [
                41
            ],
            "on_MediaInterface": [
                38
            ],
            "on_Node": [
                54
            ],
            "__typename": [
                80
            ]
        },
        "MediaVideo": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "name": [
                80
            ],
            "status": [
                11
            ],
            "video": [
                18
            ],
            "__typename": [
                80
            ]
        },
        "Menu": {
            "items": [
                44
            ],
            "name": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MenuAvailable": {},
        "MenuItem": {
            "children": [
                44
            ],
            "description": [
                80
            ],
            "expanded": [
                11
            ],
            "route": [
                78
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MenuUnion": {
            "on_Menu": [
                42
            ],
            "__typename": [
                80
            ]
        },
        "MetaTag": {
            "tag": [
                80
            ],
            "on_MetaTagLink": [
                47
            ],
            "on_MetaTagProperty": [
                49
            ],
            "on_MetaTagValue": [
                52
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagLink": {
            "attributes": [
                48
            ],
            "tag": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagLinkAttributes": {
            "href": [
                80
            ],
            "rel": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagProperty": {
            "attributes": [
                50
            ],
            "tag": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagPropertyAttributes": {
            "content": [
                80
            ],
            "property": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagUnion": {
            "on_MetaTagLink": [
                47
            ],
            "on_MetaTagProperty": [
                49
            ],
            "on_MetaTagValue": [
                52
            ],
            "on_MetaTag": [
                46
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagValue": {
            "attributes": [
                53
            ],
            "tag": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagValueAttributes": {
            "content": [
                80
            ],
            "name": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Node": {
            "id": [
                21
            ],
            "on_BlockContent": [
                3
            ],
            "on_BlockContentAnotherType": [
                4
            ],
            "on_BlockContentBasicBlock": [
                5
            ],
            "on_BlockPlugin": [
                9
            ],
            "on_Layout": [
                29
            ],
            "on_MediaAudio": [
                35
            ],
            "on_MediaDocument": [
                36
            ],
            "on_MediaImage": [
                37
            ],
            "on_MediaRemoteVideo": [
                39
            ],
            "on_MediaVideo": [
                41
            ],
            "on_NodePage": [
                56
            ],
            "on_ParagraphBlock": [
                61
            ],
            "on_ParagraphCallToAction": [
                62
            ],
            "on_ParagraphMedia": [
                64
            ],
            "on_ParagraphQuote": [
                65
            ],
            "on_ParagraphSection": [
                66
            ],
            "on_ParagraphTable": [
                67
            ],
            "on_ParagraphText": [
                68
            ],
            "on_TermTags": [
                84
            ],
            "on_User": [
                92
            ],
            "__typename": [
                80
            ]
        },
        "NodeInterface": {
            "author": [
                92
            ],
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "metatag": [
                51
            ],
            "path": [
                80
            ],
            "promote": [
                11
            ],
            "status": [
                11
            ],
            "sticky": [
                11
            ],
            "title": [
                80
            ],
            "on_NodePage": [
                56
            ],
            "__typename": [
                80
            ]
        },
        "NodePage": {
            "author": [
                92
            ],
            "changed": [
                15
            ],
            "content": [
                69
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "metatag": [
                51
            ],
            "path": [
                80
            ],
            "promote": [
                11
            ],
            "status": [
                11
            ],
            "sticky": [
                11
            ],
            "tags": [
                85
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "NodePageConnection": {
            "edges": [
                58
            ],
            "nodes": [
                56
            ],
            "pageInfo": [
                60
            ],
            "__typename": [
                80
            ]
        },
        "NodePageEdge": {
            "cursor": [
                14
            ],
            "node": [
                56
            ],
            "__typename": [
                80
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                56
            ],
            "on_Node": [
                54
            ],
            "on_NodeInterface": [
                55
            ],
            "__typename": [
                80
            ]
        },
        "PageInfo": {
            "endCursor": [
                14
            ],
            "hasNextPage": [
                11
            ],
            "hasPreviousPage": [
                11
            ],
            "startCursor": [
                14
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphBlock": {
            "block": [
                10
            ],
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "feature": [
                80
            ],
            "id": [
                21
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphCallToAction": {
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "link": [
                34
            ],
            "text": [
                86
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphInterface": {
            "created": [
                15
            ],
            "id": [
                21
            ],
            "on_ParagraphBlock": [
                61
            ],
            "on_ParagraphCallToAction": [
                62
            ],
            "on_ParagraphMedia": [
                64
            ],
            "on_ParagraphQuote": [
                65
            ],
            "on_ParagraphSection": [
                66
            ],
            "on_ParagraphTable": [
                67
            ],
            "on_ParagraphText": [
                68
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphMedia": {
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "description": [
                86
            ],
            "id": [
                21
            ],
            "media": [
                40
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphQuote": {
            "citation": [
                80
            ],
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "link": [
                34
            ],
            "quote": [
                86
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphSection": {
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphTable": {
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "table": [
                81
            ],
            "title": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphText": {
            "composition": [
                30
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "text": [
                86
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphUnion": {
            "on_ParagraphBlock": [
                61
            ],
            "on_ParagraphCallToAction": [
                62
            ],
            "on_ParagraphMedia": [
                64
            ],
            "on_ParagraphQuote": [
                65
            ],
            "on_ParagraphSection": [
                66
            ],
            "on_ParagraphTable": [
                67
            ],
            "on_ParagraphText": [
                68
            ],
            "on_LayoutParagraphsInterface": [
                31
            ],
            "on_Node": [
                54
            ],
            "on_ParagraphInterface": [
                63
            ],
            "__typename": [
                80
            ]
        },
        "PhoneNumber": {},
        "Query": {
            "block": [
                10,
                {
                    "block_plugin_id": [
                        80,
                        "String!"
                    ]
                }
            ],
            "info": [
                79
            ],
            "menu": [
                42,
                {
                    "name": [
                        43,
                        "MenuAvailable!"
                    ]
                }
            ],
            "nodePage": [
                56,
                {
                    "id": [
                        21,
                        "ID!"
                    ]
                }
            ],
            "nodePages": [
                57,
                {
                    "after": [
                        14
                    ],
                    "before": [
                        14
                    ],
                    "first": [
                        27
                    ],
                    "last": [
                        27
                    ],
                    "reverse": [
                        11
                    ],
                    "sortKey": [
                        13
                    ]
                }
            ],
            "route": [
                78,
                {
                    "path": [
                        80,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                92
            ],
            "__typename": [
                80
            ]
        },
        "Response": {
            "errors": [
                98
            ],
            "__typename": [
                80
            ]
        },
        "Route": {
            "internal": [
                11
            ],
            "url": [
                80
            ],
            "on_RouteExternal": [
                75
            ],
            "on_RouteInternal": [
                76
            ],
            "on_RouteRedirect": [
                77
            ],
            "__typename": [
                80
            ]
        },
        "RouteEntityUnion": {
            "on_NodePage": [
                56
            ],
            "on_TermTags": [
                84
            ],
            "on_Node": [
                54
            ],
            "on_NodeInterface": [
                55
            ],
            "on_TermInterface": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "RouteExternal": {
            "internal": [
                11
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "RouteInternal": {
            "entity": [
                74
            ],
            "internal": [
                11
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "RouteRedirect": {
            "internal": [
                11
            ],
            "redirect": [
                11
            ],
            "status": [
                27
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "RouteUnion": {
            "on_RouteExternal": [
                75
            ],
            "on_RouteInternal": [
                76
            ],
            "on_RouteRedirect": [
                77
            ],
            "on_Route": [
                73
            ],
            "__typename": [
                80
            ]
        },
        "SchemaInformation": {
            "description": [
                80
            ],
            "home": [
                80
            ],
            "version": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "String": {},
        "Table": {
            "caption": [
                80
            ],
            "format": [
                80
            ],
            "rows": [
                82
            ],
            "__typename": [
                80
            ]
        },
        "TableRow": {
            "data": [
                80
            ],
            "weight": [
                27
            ],
            "__typename": [
                80
            ]
        },
        "TermInterface": {
            "changed": [
                15
            ],
            "description": [
                86
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                11
            ],
            "on_TermTags": [
                84
            ],
            "__typename": [
                80
            ]
        },
        "TermTags": {
            "changed": [
                15
            ],
            "description": [
                86
            ],
            "id": [
                21
            ],
            "langcode": [
                28
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                11
            ],
            "__typename": [
                80
            ]
        },
        "TermUnion": {
            "on_TermTags": [
                84
            ],
            "on_Node": [
                54
            ],
            "on_TermInterface": [
                83
            ],
            "__typename": [
                80
            ]
        },
        "Text": {
            "format": [
                80
            ],
            "processed": [
                20
            ],
            "value": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "TextSummary": {
            "format": [
                80
            ],
            "processed": [
                20
            ],
            "summary": [
                20
            ],
            "value": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Time": {},
        "TimeZone": {},
        "Timestamp": {},
        "UnsupportedType": {
            "unsupported": [
                11
            ],
            "__typename": [
                80
            ]
        },
        "User": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "mail": [
                17
            ],
            "name": [
                80
            ],
            "roles": [
                94
            ],
            "status": [
                95
            ],
            "__typename": [
                80
            ]
        },
        "UserInterface": {
            "changed": [
                15
            ],
            "created": [
                15
            ],
            "id": [
                21
            ],
            "mail": [
                17
            ],
            "name": [
                80
            ],
            "roles": [
                94
            ],
            "status": [
                95
            ],
            "on_User": [
                92
            ],
            "__typename": [
                80
            ]
        },
        "UserRoles": {},
        "UserStatus": {},
        "UserUnion": {
            "on_User": [
                92
            ],
            "on_Node": [
                54
            ],
            "on_UserInterface": [
                93
            ],
            "__typename": [
                80
            ]
        },
        "UtcOffset": {},
        "Violation": {}
    }
}
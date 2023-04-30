export default {
    "scalars": [
        2,
        12,
        15,
        16,
        20,
        22,
        23,
        24,
        27,
        30,
        47,
        74,
        84,
        85,
        93,
        94,
        95,
        99,
        100,
        102,
        107
    ],
    "types": {
        "Address": {
            "additionalName": [
                85
            ],
            "addressLine1": [
                85
            ],
            "addressLine2": [
                85
            ],
            "administrativeArea": [
                85
            ],
            "country": [
                1
            ],
            "dependentLocality": [
                85
            ],
            "familyName": [
                85
            ],
            "givenName": [
                85
            ],
            "langcode": [
                85
            ],
            "locality": [
                85
            ],
            "organization": [
                85
            ],
            "postalCode": [
                85
            ],
            "sortingCode": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "AddressCountry": {
            "code": [
                85
            ],
            "name": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Attributes": {},
        "Block": {
            "id": [
                24
            ],
            "render": [
                23
            ],
            "title": [
                85
            ],
            "on_BlockContent": [
                4
            ],
            "on_BlockPlugin": [
                10
            ],
            "__typename": [
                85
            ]
        },
        "BlockContent": {
            "entity": [
                8
            ],
            "id": [
                24
            ],
            "render": [
                23
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "BlockContentAnotherType": {
            "body": [
                92
            ],
            "changed": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "reusable": [
                12
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "BlockContentBasicBlock": {
            "body": [
                92
            ],
            "changed": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "reusable": [
                12
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "BlockContentInterface": {
            "changed": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "reusable": [
                12
            ],
            "title": [
                85
            ],
            "on_BlockContentAnotherType": [
                5
            ],
            "on_BlockContentBasicBlock": [
                6
            ],
            "__typename": [
                85
            ]
        },
        "BlockContentUnion": {
            "on_BlockContentAnotherType": [
                5
            ],
            "on_BlockContentBasicBlock": [
                6
            ],
            "on_BlockContentInterface": [
                7
            ],
            "on_Node": [
                60
            ],
            "__typename": [
                85
            ]
        },
        "BlockField": {
            "block": [
                3
            ],
            "configuration": [
                2
            ],
            "plugin_id": [
                24
            ],
            "__typename": [
                85
            ]
        },
        "BlockPlugin": {
            "id": [
                24
            ],
            "render": [
                23
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "BlockUnion": {
            "on_BlockContent": [
                4
            ],
            "on_BlockPlugin": [
                10
            ],
            "on_Block": [
                3
            ],
            "on_Node": [
                60
            ],
            "__typename": [
                85
            ]
        },
        "Boolean": {},
        "Connection": {
            "edges": [
                19
            ],
            "nodes": [
                60
            ],
            "pageInfo": [
                14
            ],
            "__typename": [
                85
            ]
        },
        "ConnectionPageInfo": {
            "endCursor": [
                16
            ],
            "hasNextPage": [
                12
            ],
            "hasPreviousPage": [
                12
            ],
            "startCursor": [
                16
            ],
            "__typename": [
                85
            ]
        },
        "ConnectionSortKeys": {},
        "Cursor": {},
        "DateRange": {
            "end": [
                18
            ],
            "start": [
                18
            ],
            "__typename": [
                85
            ]
        },
        "DateTime": {
            "offset": [
                102
            ],
            "time": [
                93
            ],
            "timestamp": [
                95
            ],
            "timezone": [
                94
            ],
            "__typename": [
                85
            ]
        },
        "Edge": {
            "cursor": [
                16
            ],
            "node": [
                60
            ],
            "__typename": [
                85
            ]
        },
        "Email": {},
        "File": {
            "description": [
                85
            ],
            "mime": [
                85
            ],
            "name": [
                85
            ],
            "size": [
                30
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Float": {},
        "Html": {},
        "ID": {},
        "Image": {
            "alt": [
                85
            ],
            "height": [
                30
            ],
            "mime": [
                85
            ],
            "title": [
                85
            ],
            "url": [
                85
            ],
            "variations": [
                28,
                {
                    "styles": [
                        27,
                        "[ImageStyleAvailable]"
                    ]
                }
            ],
            "width": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "ImageStyle": {
            "id": [
                24
            ],
            "name": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ImageStyleAvailable": {},
        "ImageStyleDerivative": {
            "height": [
                30
            ],
            "name": [
                85
            ],
            "url": [
                85
            ],
            "width": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "ImageStyleUnion": {
            "on_ImageStyle": [
                26
            ],
            "__typename": [
                85
            ]
        },
        "Int": {},
        "KeyValueInput": {
            "key": [
                85
            ],
            "value": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Language": {
            "direction": [
                85
            ],
            "id": [
                24
            ],
            "name": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Layout": {
            "category": [
                85
            ],
            "defaultRegion": [
                85
            ],
            "id": [
                24
            ],
            "label": [
                85
            ],
            "regions": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "LayoutParagraphs": {
            "layout": [
                33
            ],
            "position": [
                36
            ],
            "__typename": [
                85
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                34
            ],
            "on_ParagraphAccordion": [
                64
            ],
            "on_ParagraphBlock": [
                65
            ],
            "on_ParagraphCallToAction": [
                66
            ],
            "on_ParagraphMedia": [
                68
            ],
            "on_ParagraphQuote": [
                69
            ],
            "on_ParagraphSection": [
                70
            ],
            "on_ParagraphTable": [
                71
            ],
            "on_ParagraphText": [
                72
            ],
            "__typename": [
                85
            ]
        },
        "LayoutParagraphsPosition": {
            "parentId": [
                24
            ],
            "region": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "LayoutPosition": {
            "parentId": [
                24
            ],
            "region": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Link": {
            "internal": [
                12
            ],
            "route": [
                82
            ],
            "title": [
                85
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MediaAudio": {
            "audio": [
                21
            ],
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "name": [
                85
            ],
            "status": [
                12
            ],
            "__typename": [
                85
            ]
        },
        "MediaDocument": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "document": [
                21
            ],
            "id": [
                24
            ],
            "name": [
                85
            ],
            "status": [
                12
            ],
            "__typename": [
                85
            ]
        },
        "MediaImage": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "image": [
                25
            ],
            "name": [
                85
            ],
            "status": [
                12
            ],
            "__typename": [
                85
            ]
        },
        "MediaInterface": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "name": [
                85
            ],
            "status": [
                12
            ],
            "on_MediaAudio": [
                39
            ],
            "on_MediaDocument": [
                40
            ],
            "on_MediaImage": [
                41
            ],
            "on_MediaRemoteVideo": [
                43
            ],
            "on_MediaVideo": [
                45
            ],
            "__typename": [
                85
            ]
        },
        "MediaRemoteVideo": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "name": [
                85
            ],
            "status": [
                12
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MediaUnion": {
            "on_MediaAudio": [
                39
            ],
            "on_MediaDocument": [
                40
            ],
            "on_MediaImage": [
                41
            ],
            "on_MediaRemoteVideo": [
                43
            ],
            "on_MediaVideo": [
                45
            ],
            "on_MediaInterface": [
                42
            ],
            "on_Node": [
                60
            ],
            "__typename": [
                85
            ]
        },
        "MediaVideo": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "name": [
                85
            ],
            "status": [
                12
            ],
            "video": [
                21
            ],
            "__typename": [
                85
            ]
        },
        "Menu": {
            "items": [
                48
            ],
            "name": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MenuAvailable": {},
        "MenuItem": {
            "attributes": [
                49
            ],
            "children": [
                48
            ],
            "description": [
                85
            ],
            "expanded": [
                12
            ],
            "id": [
                24
            ],
            "internal": [
                12
            ],
            "route": [
                82
            ],
            "title": [
                85
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MenuItemAttributes": {
            "class": [
                85
            ],
            "id": [
                85
            ],
            "target": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MenuUnion": {
            "on_Menu": [
                46
            ],
            "__typename": [
                85
            ]
        },
        "MetaTag": {
            "tag": [
                85
            ],
            "on_MetaTagLink": [
                52
            ],
            "on_MetaTagProperty": [
                54
            ],
            "on_MetaTagValue": [
                57
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagLink": {
            "attributes": [
                53
            ],
            "tag": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagLinkAttributes": {
            "href": [
                85
            ],
            "rel": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagProperty": {
            "attributes": [
                55
            ],
            "tag": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagPropertyAttributes": {
            "content": [
                85
            ],
            "property": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagUnion": {
            "on_MetaTagLink": [
                52
            ],
            "on_MetaTagProperty": [
                54
            ],
            "on_MetaTagValue": [
                57
            ],
            "on_MetaTag": [
                51
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagValue": {
            "attributes": [
                58
            ],
            "tag": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagValueAttributes": {
            "content": [
                85
            ],
            "name": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Mutation": {
            "_": [
                12
            ],
            "__typename": [
                85
            ]
        },
        "Node": {
            "id": [
                24
            ],
            "on_BlockContent": [
                4
            ],
            "on_BlockContentAnotherType": [
                5
            ],
            "on_BlockContentBasicBlock": [
                6
            ],
            "on_BlockPlugin": [
                10
            ],
            "on_Layout": [
                33
            ],
            "on_MediaAudio": [
                39
            ],
            "on_MediaDocument": [
                40
            ],
            "on_MediaImage": [
                41
            ],
            "on_MediaRemoteVideo": [
                43
            ],
            "on_MediaVideo": [
                45
            ],
            "on_NodePage": [
                62
            ],
            "on_ParagraphAccordion": [
                64
            ],
            "on_ParagraphBlock": [
                65
            ],
            "on_ParagraphCallToAction": [
                66
            ],
            "on_ParagraphMedia": [
                68
            ],
            "on_ParagraphQuote": [
                69
            ],
            "on_ParagraphSection": [
                70
            ],
            "on_ParagraphTable": [
                71
            ],
            "on_ParagraphText": [
                72
            ],
            "on_TermTags": [
                89
            ],
            "on_User": [
                97
            ],
            "__typename": [
                85
            ]
        },
        "NodeInterface": {
            "author": [
                97
            ],
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "metatag": [
                56
            ],
            "path": [
                85
            ],
            "promote": [
                12
            ],
            "status": [
                12
            ],
            "sticky": [
                12
            ],
            "title": [
                85
            ],
            "on_NodePage": [
                62
            ],
            "__typename": [
                85
            ]
        },
        "NodePage": {
            "author": [
                97
            ],
            "changed": [
                18
            ],
            "content": [
                73
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "metatag": [
                56
            ],
            "path": [
                85
            ],
            "promote": [
                12
            ],
            "status": [
                12
            ],
            "sticky": [
                12
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                62
            ],
            "on_Node": [
                60
            ],
            "on_NodeInterface": [
                61
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphAccordion": {
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "items": [
                73
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphBlock": {
            "block": [
                11
            ],
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "feature": [
                85
            ],
            "id": [
                24
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphCallToAction": {
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "link": [
                38
            ],
            "text": [
                91
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphInterface": {
            "created": [
                18
            ],
            "id": [
                24
            ],
            "on_ParagraphAccordion": [
                64
            ],
            "on_ParagraphBlock": [
                65
            ],
            "on_ParagraphCallToAction": [
                66
            ],
            "on_ParagraphMedia": [
                68
            ],
            "on_ParagraphQuote": [
                69
            ],
            "on_ParagraphSection": [
                70
            ],
            "on_ParagraphTable": [
                71
            ],
            "on_ParagraphText": [
                72
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphMedia": {
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "description": [
                91
            ],
            "id": [
                24
            ],
            "media": [
                44
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphQuote": {
            "citation": [
                85
            ],
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "link": [
                38
            ],
            "quote": [
                91
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphSection": {
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphTable": {
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "table": [
                86
            ],
            "title": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphText": {
            "composition": [
                34
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "text": [
                91
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphUnion": {
            "on_ParagraphAccordion": [
                64
            ],
            "on_ParagraphBlock": [
                65
            ],
            "on_ParagraphCallToAction": [
                66
            ],
            "on_ParagraphMedia": [
                68
            ],
            "on_ParagraphQuote": [
                69
            ],
            "on_ParagraphSection": [
                70
            ],
            "on_ParagraphTable": [
                71
            ],
            "on_ParagraphText": [
                72
            ],
            "on_LayoutParagraphsInterface": [
                35
            ],
            "on_Node": [
                60
            ],
            "on_ParagraphInterface": [
                67
            ],
            "__typename": [
                85
            ]
        },
        "PhoneNumber": {},
        "Query": {
            "block": [
                11,
                {
                    "block_plugin_id": [
                        85,
                        "String!"
                    ]
                }
            ],
            "info": [
                83
            ],
            "menu": [
                46,
                {
                    "name": [
                        47,
                        "MenuAvailable!"
                    ]
                }
            ],
            "route": [
                82,
                {
                    "langcode": [
                        85
                    ],
                    "path": [
                        85,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                97
            ],
            "__typename": [
                85
            ]
        },
        "Response": {
            "errors": [
                107
            ],
            "__typename": [
                85
            ]
        },
        "Route": {
            "internal": [
                12
            ],
            "url": [
                85
            ],
            "on_RouteExternal": [
                79
            ],
            "on_RouteInternal": [
                80
            ],
            "on_RouteRedirect": [
                81
            ],
            "__typename": [
                85
            ]
        },
        "RouteEntityUnion": {
            "on_NodePage": [
                62
            ],
            "on_Node": [
                60
            ],
            "on_NodeInterface": [
                61
            ],
            "__typename": [
                85
            ]
        },
        "RouteExternal": {
            "internal": [
                12
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "RouteInternal": {
            "entity": [
                78
            ],
            "internal": [
                12
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "RouteRedirect": {
            "internal": [
                12
            ],
            "redirect": [
                12
            ],
            "status": [
                30
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "RouteUnion": {
            "on_RouteExternal": [
                79
            ],
            "on_RouteInternal": [
                80
            ],
            "on_RouteRedirect": [
                81
            ],
            "on_Route": [
                77
            ],
            "__typename": [
                85
            ]
        },
        "SchemaInformation": {
            "description": [
                85
            ],
            "home": [
                85
            ],
            "version": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "SortDirection": {},
        "String": {},
        "Table": {
            "caption": [
                85
            ],
            "format": [
                85
            ],
            "rows": [
                87
            ],
            "__typename": [
                85
            ]
        },
        "TableRow": {
            "data": [
                85
            ],
            "weight": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "TermInterface": {
            "changed": [
                18
            ],
            "description": [
                91
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                12
            ],
            "on_TermTags": [
                89
            ],
            "__typename": [
                85
            ]
        },
        "TermTags": {
            "changed": [
                18
            ],
            "description": [
                91
            ],
            "id": [
                24
            ],
            "langcode": [
                32
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                12
            ],
            "__typename": [
                85
            ]
        },
        "TermUnion": {
            "on_TermTags": [
                89
            ],
            "on_Node": [
                60
            ],
            "on_TermInterface": [
                88
            ],
            "__typename": [
                85
            ]
        },
        "Text": {
            "format": [
                85
            ],
            "processed": [
                23
            ],
            "value": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "TextSummary": {
            "format": [
                85
            ],
            "processed": [
                23
            ],
            "summary": [
                23
            ],
            "value": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "Time": {},
        "TimeZone": {},
        "Timestamp": {},
        "UnsupportedType": {
            "unsupported": [
                12
            ],
            "__typename": [
                85
            ]
        },
        "User": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "mail": [
                20
            ],
            "name": [
                85
            ],
            "roles": [
                99
            ],
            "status": [
                100
            ],
            "userPicture": [
                25
            ],
            "__typename": [
                85
            ]
        },
        "UserInterface": {
            "changed": [
                18
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "mail": [
                20
            ],
            "name": [
                85
            ],
            "roles": [
                99
            ],
            "status": [
                100
            ],
            "on_User": [
                97
            ],
            "__typename": [
                85
            ]
        },
        "UserRoles": {},
        "UserStatus": {},
        "UserUnion": {
            "on_User": [
                97
            ],
            "on_Node": [
                60
            ],
            "on_UserInterface": [
                98
            ],
            "__typename": [
                85
            ]
        },
        "UtcOffset": {},
        "View": {
            "description": [
                85
            ],
            "display": [
                85
            ],
            "id": [
                24
            ],
            "label": [
                85
            ],
            "langcode": [
                85
            ],
            "pageInfo": [
                104
            ],
            "view": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ViewPageInfo": {
            "offset": [
                30
            ],
            "page": [
                30
            ],
            "pageSize": [
                30
            ],
            "total": [
                30
            ],
            "__typename": [
                85
            ]
        },
        "ViewReference": {
            "contextualFilter": [
                85
            ],
            "display": [
                85
            ],
            "pageSize": [
                30
            ],
            "query": [
                85
            ],
            "view": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "ViewResultUnion": {
            "on_UnsupportedType": [
                96
            ],
            "__typename": [
                85
            ]
        },
        "Violation": {}
    }
}
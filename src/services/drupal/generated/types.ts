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
        46,
        73,
        83,
        84,
        92,
        93,
        94,
        98,
        99,
        101,
        104
    ],
    "types": {
        "Address": {
            "additionalName": [
                84
            ],
            "addressLine1": [
                84
            ],
            "addressLine2": [
                84
            ],
            "administrativeArea": [
                84
            ],
            "country": [
                1
            ],
            "dependentLocality": [
                84
            ],
            "familyName": [
                84
            ],
            "givenName": [
                84
            ],
            "langcode": [
                84
            ],
            "locality": [
                84
            ],
            "organization": [
                84
            ],
            "postalCode": [
                84
            ],
            "sortingCode": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "AddressCountry": {
            "code": [
                84
            ],
            "name": [
                84
            ],
            "__typename": [
                84
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
                84
            ],
            "on_BlockContent": [
                4
            ],
            "on_BlockPlugin": [
                10
            ],
            "__typename": [
                84
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
                84
            ],
            "__typename": [
                84
            ]
        },
        "BlockContentAnotherType": {
            "body": [
                91
            ],
            "changed": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                31
            ],
            "reusable": [
                12
            ],
            "title": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "BlockContentBasicBlock": {
            "body": [
                91
            ],
            "changed": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                31
            ],
            "reusable": [
                12
            ],
            "title": [
                84
            ],
            "__typename": [
                84
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
                31
            ],
            "reusable": [
                12
            ],
            "title": [
                84
            ],
            "on_BlockContentAnotherType": [
                5
            ],
            "on_BlockContentBasicBlock": [
                6
            ],
            "__typename": [
                84
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
                59
            ],
            "__typename": [
                84
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
                84
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
                84
            ],
            "__typename": [
                84
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
                59
            ],
            "__typename": [
                84
            ]
        },
        "Boolean": {},
        "Connection": {
            "edges": [
                19
            ],
            "nodes": [
                59
            ],
            "pageInfo": [
                14
            ],
            "__typename": [
                84
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
                84
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
                84
            ]
        },
        "DateTime": {
            "offset": [
                101
            ],
            "time": [
                92
            ],
            "timestamp": [
                94
            ],
            "timezone": [
                93
            ],
            "__typename": [
                84
            ]
        },
        "Edge": {
            "cursor": [
                16
            ],
            "node": [
                59
            ],
            "__typename": [
                84
            ]
        },
        "Email": {},
        "File": {
            "description": [
                84
            ],
            "mime": [
                84
            ],
            "name": [
                84
            ],
            "size": [
                30
            ],
            "url": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "Float": {},
        "Html": {},
        "ID": {},
        "Image": {
            "alt": [
                84
            ],
            "height": [
                30
            ],
            "mime": [
                84
            ],
            "title": [
                84
            ],
            "url": [
                84
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
                84
            ]
        },
        "ImageStyle": {
            "id": [
                24
            ],
            "name": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "ImageStyleAvailable": {},
        "ImageStyleDerivative": {
            "height": [
                30
            ],
            "name": [
                84
            ],
            "url": [
                84
            ],
            "width": [
                30
            ],
            "__typename": [
                84
            ]
        },
        "ImageStyleUnion": {
            "on_ImageStyle": [
                26
            ],
            "__typename": [
                84
            ]
        },
        "Int": {},
        "Language": {
            "direction": [
                84
            ],
            "id": [
                24
            ],
            "name": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "Layout": {
            "category": [
                84
            ],
            "defaultRegion": [
                84
            ],
            "id": [
                24
            ],
            "label": [
                84
            ],
            "regions": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "LayoutParagraphs": {
            "layout": [
                32
            ],
            "position": [
                35
            ],
            "__typename": [
                84
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                33
            ],
            "on_ParagraphAccordion": [
                63
            ],
            "on_ParagraphBlock": [
                64
            ],
            "on_ParagraphCallToAction": [
                65
            ],
            "on_ParagraphMedia": [
                67
            ],
            "on_ParagraphQuote": [
                68
            ],
            "on_ParagraphSection": [
                69
            ],
            "on_ParagraphTable": [
                70
            ],
            "on_ParagraphText": [
                71
            ],
            "__typename": [
                84
            ]
        },
        "LayoutParagraphsPosition": {
            "parentId": [
                24
            ],
            "region": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "LayoutPosition": {
            "parentId": [
                24
            ],
            "region": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "Link": {
            "route": [
                81
            ],
            "title": [
                84
            ],
            "url": [
                84
            ],
            "__typename": [
                84
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
                84
            ],
            "status": [
                12
            ],
            "__typename": [
                84
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
                84
            ],
            "status": [
                12
            ],
            "__typename": [
                84
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
                84
            ],
            "status": [
                12
            ],
            "__typename": [
                84
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
                84
            ],
            "status": [
                12
            ],
            "on_MediaAudio": [
                38
            ],
            "on_MediaDocument": [
                39
            ],
            "on_MediaImage": [
                40
            ],
            "on_MediaRemoteVideo": [
                42
            ],
            "on_MediaVideo": [
                44
            ],
            "__typename": [
                84
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
                84
            ],
            "status": [
                12
            ],
            "url": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MediaUnion": {
            "on_MediaAudio": [
                38
            ],
            "on_MediaDocument": [
                39
            ],
            "on_MediaImage": [
                40
            ],
            "on_MediaRemoteVideo": [
                42
            ],
            "on_MediaVideo": [
                44
            ],
            "on_MediaInterface": [
                41
            ],
            "on_Node": [
                59
            ],
            "__typename": [
                84
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
                84
            ],
            "status": [
                12
            ],
            "video": [
                21
            ],
            "__typename": [
                84
            ]
        },
        "Menu": {
            "items": [
                47
            ],
            "name": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MenuAvailable": {},
        "MenuItem": {
            "attributes": [
                48
            ],
            "children": [
                47
            ],
            "description": [
                84
            ],
            "expanded": [
                12
            ],
            "route": [
                81
            ],
            "title": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MenuItemAttributes": {
            "class": [
                84
            ],
            "id": [
                84
            ],
            "target": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MenuUnion": {
            "on_Menu": [
                45
            ],
            "__typename": [
                84
            ]
        },
        "MetaTag": {
            "tag": [
                84
            ],
            "on_MetaTagLink": [
                51
            ],
            "on_MetaTagProperty": [
                53
            ],
            "on_MetaTagValue": [
                56
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagLink": {
            "attributes": [
                52
            ],
            "tag": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagLinkAttributes": {
            "href": [
                84
            ],
            "rel": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagProperty": {
            "attributes": [
                54
            ],
            "tag": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagPropertyAttributes": {
            "content": [
                84
            ],
            "property": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagUnion": {
            "on_MetaTagLink": [
                51
            ],
            "on_MetaTagProperty": [
                53
            ],
            "on_MetaTagValue": [
                56
            ],
            "on_MetaTag": [
                50
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagValue": {
            "attributes": [
                57
            ],
            "tag": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagValueAttributes": {
            "content": [
                84
            ],
            "name": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "Mutation": {
            "_": [
                12
            ],
            "__typename": [
                84
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
                32
            ],
            "on_MediaAudio": [
                38
            ],
            "on_MediaDocument": [
                39
            ],
            "on_MediaImage": [
                40
            ],
            "on_MediaRemoteVideo": [
                42
            ],
            "on_MediaVideo": [
                44
            ],
            "on_NodePage": [
                61
            ],
            "on_ParagraphAccordion": [
                63
            ],
            "on_ParagraphBlock": [
                64
            ],
            "on_ParagraphCallToAction": [
                65
            ],
            "on_ParagraphMedia": [
                67
            ],
            "on_ParagraphQuote": [
                68
            ],
            "on_ParagraphSection": [
                69
            ],
            "on_ParagraphTable": [
                70
            ],
            "on_ParagraphText": [
                71
            ],
            "on_TermTags": [
                88
            ],
            "on_User": [
                96
            ],
            "__typename": [
                84
            ]
        },
        "NodeInterface": {
            "author": [
                96
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
                31
            ],
            "metatag": [
                55
            ],
            "path": [
                84
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
                84
            ],
            "on_NodePage": [
                61
            ],
            "__typename": [
                84
            ]
        },
        "NodePage": {
            "author": [
                96
            ],
            "changed": [
                18
            ],
            "content": [
                72
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "langcode": [
                31
            ],
            "metatag": [
                55
            ],
            "path": [
                84
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
                84
            ],
            "__typename": [
                84
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                61
            ],
            "on_Node": [
                59
            ],
            "on_NodeInterface": [
                60
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphAccordion": {
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "items": [
                72
            ],
            "title": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphBlock": {
            "block": [
                11
            ],
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "feature": [
                84
            ],
            "id": [
                24
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphCallToAction": {
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "link": [
                37
            ],
            "text": [
                90
            ],
            "title": [
                84
            ],
            "__typename": [
                84
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
                63
            ],
            "on_ParagraphBlock": [
                64
            ],
            "on_ParagraphCallToAction": [
                65
            ],
            "on_ParagraphMedia": [
                67
            ],
            "on_ParagraphQuote": [
                68
            ],
            "on_ParagraphSection": [
                69
            ],
            "on_ParagraphTable": [
                70
            ],
            "on_ParagraphText": [
                71
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphMedia": {
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "description": [
                90
            ],
            "id": [
                24
            ],
            "media": [
                43
            ],
            "title": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphQuote": {
            "citation": [
                84
            ],
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "link": [
                37
            ],
            "quote": [
                90
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphSection": {
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphTable": {
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "table": [
                85
            ],
            "title": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphText": {
            "composition": [
                33
            ],
            "created": [
                18
            ],
            "id": [
                24
            ],
            "text": [
                90
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphUnion": {
            "on_ParagraphAccordion": [
                63
            ],
            "on_ParagraphBlock": [
                64
            ],
            "on_ParagraphCallToAction": [
                65
            ],
            "on_ParagraphMedia": [
                67
            ],
            "on_ParagraphQuote": [
                68
            ],
            "on_ParagraphSection": [
                69
            ],
            "on_ParagraphTable": [
                70
            ],
            "on_ParagraphText": [
                71
            ],
            "on_LayoutParagraphsInterface": [
                34
            ],
            "on_Node": [
                59
            ],
            "on_ParagraphInterface": [
                66
            ],
            "__typename": [
                84
            ]
        },
        "PhoneNumber": {},
        "Query": {
            "block": [
                11,
                {
                    "block_plugin_id": [
                        84,
                        "String!"
                    ]
                }
            ],
            "info": [
                82
            ],
            "menu": [
                45,
                {
                    "name": [
                        46,
                        "MenuAvailable!"
                    ]
                }
            ],
            "route": [
                81,
                {
                    "langcode": [
                        84
                    ],
                    "path": [
                        84,
                        "String!"
                    ]
                }
            ],
            "viewer": [
                96
            ],
            "__typename": [
                84
            ]
        },
        "Response": {
            "errors": [
                104
            ],
            "__typename": [
                84
            ]
        },
        "Route": {
            "internal": [
                12
            ],
            "url": [
                84
            ],
            "on_RouteExternal": [
                78
            ],
            "on_RouteInternal": [
                79
            ],
            "on_RouteRedirect": [
                80
            ],
            "__typename": [
                84
            ]
        },
        "RouteEntityUnion": {
            "on_NodePage": [
                61
            ],
            "on_Node": [
                59
            ],
            "on_NodeInterface": [
                60
            ],
            "__typename": [
                84
            ]
        },
        "RouteExternal": {
            "internal": [
                12
            ],
            "url": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "RouteInternal": {
            "entity": [
                77
            ],
            "internal": [
                12
            ],
            "url": [
                84
            ],
            "__typename": [
                84
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
                84
            ],
            "__typename": [
                84
            ]
        },
        "RouteUnion": {
            "on_RouteExternal": [
                78
            ],
            "on_RouteInternal": [
                79
            ],
            "on_RouteRedirect": [
                80
            ],
            "on_Route": [
                76
            ],
            "__typename": [
                84
            ]
        },
        "SchemaInformation": {
            "description": [
                84
            ],
            "home": [
                84
            ],
            "version": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "SortDirection": {},
        "String": {},
        "Table": {
            "caption": [
                84
            ],
            "format": [
                84
            ],
            "rows": [
                86
            ],
            "__typename": [
                84
            ]
        },
        "TableRow": {
            "data": [
                84
            ],
            "weight": [
                30
            ],
            "__typename": [
                84
            ]
        },
        "TermInterface": {
            "changed": [
                18
            ],
            "description": [
                90
            ],
            "id": [
                24
            ],
            "langcode": [
                31
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                12
            ],
            "on_TermTags": [
                88
            ],
            "__typename": [
                84
            ]
        },
        "TermTags": {
            "changed": [
                18
            ],
            "description": [
                90
            ],
            "id": [
                24
            ],
            "langcode": [
                31
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                12
            ],
            "__typename": [
                84
            ]
        },
        "TermUnion": {
            "on_TermTags": [
                88
            ],
            "on_Node": [
                59
            ],
            "on_TermInterface": [
                87
            ],
            "__typename": [
                84
            ]
        },
        "Text": {
            "format": [
                84
            ],
            "processed": [
                23
            ],
            "value": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "TextSummary": {
            "format": [
                84
            ],
            "processed": [
                23
            ],
            "summary": [
                23
            ],
            "value": [
                84
            ],
            "__typename": [
                84
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
                84
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
                84
            ],
            "roles": [
                98
            ],
            "status": [
                99
            ],
            "userPicture": [
                25
            ],
            "__typename": [
                84
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
                84
            ],
            "roles": [
                98
            ],
            "status": [
                99
            ],
            "on_User": [
                96
            ],
            "__typename": [
                84
            ]
        },
        "UserRoles": {},
        "UserStatus": {},
        "UserUnion": {
            "on_User": [
                96
            ],
            "on_Node": [
                59
            ],
            "on_UserInterface": [
                97
            ],
            "__typename": [
                84
            ]
        },
        "UtcOffset": {},
        "View": {
            "description": [
                84
            ],
            "display": [
                84
            ],
            "id": [
                24
            ],
            "label": [
                84
            ],
            "langcode": [
                84
            ],
            "pageInfo": [
                103
            ],
            "view": [
                84
            ],
            "__typename": [
                84
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
                84
            ]
        },
        "Violation": {}
    }
}
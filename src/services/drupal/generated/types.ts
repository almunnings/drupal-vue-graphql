export default {
    "scalars": [
        2,
        11,
        14,
        15,
        20,
        22,
        23,
        24,
        27,
        31,
        47,
        75,
        84,
        85,
        93,
        94,
        95,
        99,
        100,
        102
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
        "BlockContent": {
            "entity": [
                7
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
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "reusable": [
                11
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
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "reusable": [
                11
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
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "reusable": [
                11
            ],
            "title": [
                85
            ],
            "on_BlockContentAnotherType": [
                4
            ],
            "on_BlockContentBasicBlock": [
                5
            ],
            "__typename": [
                85
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
            "__typename": [
                85
            ]
        },
        "BlockInterface": {
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
                3
            ],
            "on_BlockPlugin": [
                9
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
                3
            ],
            "on_BlockPlugin": [
                9
            ],
            "on_BlockInterface": [
                8
            ],
            "__typename": [
                85
            ]
        },
        "Boolean": {},
        "Connection": {
            "edges": [
                18
            ],
            "nodes": [
                19
            ],
            "pageInfo": [
                13
            ],
            "__typename": [
                85
            ]
        },
        "ConnectionPageInfo": {
            "endCursor": [
                15
            ],
            "hasNextPage": [
                11
            ],
            "hasPreviousPage": [
                11
            ],
            "startCursor": [
                15
            ],
            "__typename": [
                85
            ]
        },
        "ConnectionSortKeys": {},
        "Cursor": {},
        "DateRange": {
            "end": [
                17
            ],
            "start": [
                17
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
                15
            ],
            "node": [
                19
            ],
            "__typename": [
                85
            ]
        },
        "EdgeNode": {
            "id": [
                24
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
                31
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
                31
            ],
            "mime": [
                85
            ],
            "size": [
                31
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
                31
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
                31
            ],
            "name": [
                85
            ],
            "url": [
                85
            ],
            "width": [
                31
            ],
            "__typename": [
                85
            ]
        },
        "ImageStyleInterface": {
            "id": [
                24
            ],
            "name": [
                85
            ],
            "on_ImageStyle": [
                26
            ],
            "__typename": [
                85
            ]
        },
        "ImageStyleUnion": {
            "on_ImageStyle": [
                26
            ],
            "on_ImageStyleInterface": [
                29
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
                34
            ],
            "position": [
                37
            ],
            "__typename": [
                85
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                35
            ],
            "on_ParagraphAccordion": [
                65
            ],
            "on_ParagraphBlock": [
                66
            ],
            "on_ParagraphCallToAction": [
                67
            ],
            "on_ParagraphMedia": [
                69
            ],
            "on_ParagraphQuote": [
                70
            ],
            "on_ParagraphSection": [
                71
            ],
            "on_ParagraphTable": [
                72
            ],
            "on_ParagraphText": [
                73
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
        "Link": {
            "internal": [
                11
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
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                11
            ],
            "__typename": [
                85
            ]
        },
        "MediaDocument": {
            "changed": [
                17
            ],
            "created": [
                17
            ],
            "document": [
                21
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                11
            ],
            "__typename": [
                85
            ]
        },
        "MediaImage": {
            "changed": [
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "image": [
                25
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                11
            ],
            "__typename": [
                85
            ]
        },
        "MediaInterface": {
            "changed": [
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                11
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
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                11
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
            "on_MetaTagInterface": [
                53
            ],
            "__typename": [
                85
            ]
        },
        "MediaVideo": {
            "changed": [
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "path": [
                85
            ],
            "status": [
                11
            ],
            "video": [
                21
            ],
            "__typename": [
                85
            ]
        },
        "Menu": {
            "id": [
                24
            ],
            "items": [
                49
            ],
            "name": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "MenuAvailable": {},
        "MenuInterface": {
            "id": [
                24
            ],
            "items": [
                49
            ],
            "name": [
                85
            ],
            "on_Menu": [
                46
            ],
            "__typename": [
                85
            ]
        },
        "MenuItem": {
            "attributes": [
                50
            ],
            "children": [
                49
            ],
            "description": [
                85
            ],
            "expanded": [
                11
            ],
            "id": [
                24
            ],
            "internal": [
                11
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
            "on_MenuInterface": [
                48
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
                54
            ],
            "on_MetaTagProperty": [
                56
            ],
            "on_MetaTagValue": [
                59
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagInterface": {
            "metatag": [
                58
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
                63
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
        "MetaTagLink": {
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
                57
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
                54
            ],
            "on_MetaTagProperty": [
                56
            ],
            "on_MetaTagValue": [
                59
            ],
            "on_MetaTag": [
                52
            ],
            "__typename": [
                85
            ]
        },
        "MetaTagValue": {
            "attributes": [
                60
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
                11
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
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "path": [
                85
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
                85
            ],
            "on_NodePage": [
                63
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
                17
            ],
            "content": [
                74
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "path": [
                85
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
                85
            ],
            "__typename": [
                85
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                63
            ],
            "on_MetaTagInterface": [
                53
            ],
            "on_NodeInterface": [
                62
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphAccordion": {
            "accordionTitle": [
                85
            ],
            "composition": [
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "items": [
                74
            ],
            "langcode": [
                33
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphBlock": {
            "block": [
                10
            ],
            "composition": [
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphCallToAction": {
            "composition": [
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "on_ParagraphAccordion": [
                65
            ],
            "on_ParagraphBlock": [
                66
            ],
            "on_ParagraphCallToAction": [
                67
            ],
            "on_ParagraphMedia": [
                69
            ],
            "on_ParagraphQuote": [
                70
            ],
            "on_ParagraphSection": [
                71
            ],
            "on_ParagraphTable": [
                72
            ],
            "on_ParagraphText": [
                73
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphMedia": {
            "composition": [
                35
            ],
            "created": [
                17
            ],
            "description": [
                91
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "__typename": [
                85
            ]
        },
        "ParagraphTable": {
            "composition": [
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                65
            ],
            "on_ParagraphBlock": [
                66
            ],
            "on_ParagraphCallToAction": [
                67
            ],
            "on_ParagraphMedia": [
                69
            ],
            "on_ParagraphQuote": [
                70
            ],
            "on_ParagraphSection": [
                71
            ],
            "on_ParagraphTable": [
                72
            ],
            "on_ParagraphText": [
                73
            ],
            "on_LayoutParagraphsInterface": [
                36
            ],
            "on_ParagraphInterface": [
                68
            ],
            "__typename": [
                85
            ]
        },
        "PhoneNumber": {},
        "Query": {
            "block": [
                10,
                {
                    "id": [
                        24,
                        "ID!"
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
        "Route": {
            "internal": [
                11
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
                63
            ],
            "on_MetaTagInterface": [
                53
            ],
            "on_NodeInterface": [
                62
            ],
            "__typename": [
                85
            ]
        },
        "RouteExternal": {
            "internal": [
                11
            ],
            "url": [
                85
            ],
            "__typename": [
                85
            ]
        },
        "RouteInternal": {
            "breadcrumbs": [
                38
            ],
            "entity": [
                78
            ],
            "internal": [
                11
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
                11
            ],
            "redirect": [
                11
            ],
            "status": [
                31
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
                31
            ],
            "__typename": [
                85
            ]
        },
        "TermInterface": {
            "changed": [
                17
            ],
            "description": [
                91
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "parent": [
                90
            ],
            "path": [
                85
            ],
            "status": [
                11
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
                17
            ],
            "description": [
                91
            ],
            "id": [
                24
            ],
            "langcode": [
                33
            ],
            "metatag": [
                58
            ],
            "name": [
                85
            ],
            "parent": [
                90
            ],
            "path": [
                85
            ],
            "status": [
                11
            ],
            "__typename": [
                85
            ]
        },
        "TermUnion": {
            "on_TermTags": [
                89
            ],
            "on_MetaTagInterface": [
                53
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
                11
            ],
            "__typename": [
                85
            ]
        },
        "User": {
            "changed": [
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "mail": [
                20
            ],
            "metatag": [
                58
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
            "__typename": [
                85
            ]
        },
        "UserInterface": {
            "changed": [
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "mail": [
                20
            ],
            "metatag": [
                58
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
            "on_MetaTagInterface": [
                53
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
                31
            ],
            "page": [
                31
            ],
            "pageSize": [
                31
            ],
            "total": [
                31
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
                31
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
        }
    }
}
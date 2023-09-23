export default {
    "scalars": [
        10,
        13,
        14,
        19,
        21,
        22,
        23,
        26,
        30,
        46,
        74,
        83,
        84,
        92,
        93,
        94,
        96,
        99,
        100,
        102
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
        "BlockContent": {
            "entity": [
                6
            ],
            "id": [
                23
            ],
            "render": [
                22
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
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "reusable": [
                10
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
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "reusable": [
                10
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
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "reusable": [
                10
            ],
            "title": [
                84
            ],
            "on_BlockContentAnotherType": [
                3
            ],
            "on_BlockContentBasicBlock": [
                4
            ],
            "__typename": [
                84
            ]
        },
        "BlockContentUnion": {
            "on_BlockContentAnotherType": [
                3
            ],
            "on_BlockContentBasicBlock": [
                4
            ],
            "on_BlockContentInterface": [
                5
            ],
            "__typename": [
                84
            ]
        },
        "BlockInterface": {
            "id": [
                23
            ],
            "render": [
                22
            ],
            "title": [
                84
            ],
            "on_BlockContent": [
                2
            ],
            "on_BlockPlugin": [
                8
            ],
            "__typename": [
                84
            ]
        },
        "BlockPlugin": {
            "id": [
                23
            ],
            "render": [
                22
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
                2
            ],
            "on_BlockPlugin": [
                8
            ],
            "on_BlockInterface": [
                7
            ],
            "__typename": [
                84
            ]
        },
        "Boolean": {},
        "Connection": {
            "edges": [
                17
            ],
            "nodes": [
                18
            ],
            "pageInfo": [
                12
            ],
            "__typename": [
                84
            ]
        },
        "ConnectionPageInfo": {
            "endCursor": [
                14
            ],
            "hasNextPage": [
                10
            ],
            "hasPreviousPage": [
                10
            ],
            "startCursor": [
                14
            ],
            "__typename": [
                84
            ]
        },
        "ConnectionSortKeys": {},
        "Cursor": {},
        "DateRange": {
            "end": [
                16
            ],
            "start": [
                16
            ],
            "__typename": [
                84
            ]
        },
        "DateTime": {
            "offset": [
                102
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
                14
            ],
            "node": [
                18
            ],
            "__typename": [
                84
            ]
        },
        "EdgeNode": {
            "id": [
                23
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
            "size": [
                30
            ],
            "title": [
                84
            ],
            "url": [
                84
            ],
            "variations": [
                27,
                {
                    "styles": [
                        26,
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
                23
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
        "ImageStyleInterface": {
            "id": [
                23
            ],
            "name": [
                84
            ],
            "on_ImageStyle": [
                25
            ],
            "__typename": [
                84
            ]
        },
        "ImageStyleUnion": {
            "on_ImageStyle": [
                25
            ],
            "on_ImageStyleInterface": [
                28
            ],
            "__typename": [
                84
            ]
        },
        "Int": {},
        "KeyValueInput": {
            "key": [
                84
            ],
            "value": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "Language": {
            "direction": [
                84
            ],
            "id": [
                23
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
                23
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
                33
            ],
            "position": [
                36
            ],
            "__typename": [
                84
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
                84
            ]
        },
        "LayoutParagraphsPosition": {
            "parentId": [
                23
            ],
            "region": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "Link": {
            "internal": [
                10
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
                20
            ],
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                10
            ],
            "__typename": [
                84
            ]
        },
        "MediaDocument": {
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "document": [
                20
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                10
            ],
            "__typename": [
                84
            ]
        },
        "MediaImage": {
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "image": [
                24
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                10
            ],
            "__typename": [
                84
            ]
        },
        "MediaInterface": {
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                10
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
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                10
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
            "on_MetaTagInterface": [
                52
            ],
            "__typename": [
                84
            ]
        },
        "MediaVideo": {
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "path": [
                84
            ],
            "status": [
                10
            ],
            "video": [
                20
            ],
            "__typename": [
                84
            ]
        },
        "Menu": {
            "id": [
                23
            ],
            "items": [
                48
            ],
            "name": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "MenuAvailable": {},
        "MenuInterface": {
            "id": [
                23
            ],
            "items": [
                48
            ],
            "name": [
                84
            ],
            "on_Menu": [
                45
            ],
            "__typename": [
                84
            ]
        },
        "MenuItem": {
            "attributes": [
                49
            ],
            "children": [
                48
            ],
            "description": [
                84
            ],
            "expanded": [
                10
            ],
            "id": [
                23
            ],
            "internal": [
                10
            ],
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
            "on_MenuInterface": [
                47
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
                53
            ],
            "on_MetaTagProperty": [
                55
            ],
            "on_MetaTagValue": [
                58
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagInterface": {
            "metatag": [
                57
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
                62
            ],
            "on_TermTag": [
                88
            ],
            "on_User": [
                97
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagLink": {
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
                56
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
                53
            ],
            "on_MetaTagProperty": [
                55
            ],
            "on_MetaTagValue": [
                58
            ],
            "on_MetaTag": [
                51
            ],
            "__typename": [
                84
            ]
        },
        "MetaTagValue": {
            "attributes": [
                59
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
                10
            ],
            "__typename": [
                84
            ]
        },
        "NodeInterface": {
            "author": [
                97
            ],
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "path": [
                84
            ],
            "promote": [
                10
            ],
            "status": [
                10
            ],
            "sticky": [
                10
            ],
            "title": [
                84
            ],
            "on_NodePage": [
                62
            ],
            "__typename": [
                84
            ]
        },
        "NodePage": {
            "author": [
                97
            ],
            "changed": [
                16
            ],
            "content": [
                73
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "path": [
                84
            ],
            "promote": [
                10
            ],
            "status": [
                10
            ],
            "sticky": [
                10
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
                62
            ],
            "on_MetaTagInterface": [
                52
            ],
            "on_NodeInterface": [
                61
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphAccordion": {
            "accordionTitle": [
                84
            ],
            "composition": [
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "items": [
                73
            ],
            "langcode": [
                32
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphBlock": {
            "block": [
                9
            ],
            "composition": [
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphCallToAction": {
            "composition": [
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
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
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
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
                84
            ]
        },
        "ParagraphMedia": {
            "composition": [
                34
            ],
            "created": [
                16
            ],
            "description": [
                90
            ],
            "id": [
                23
            ],
            "langcode": [
                32
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
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
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
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "__typename": [
                84
            ]
        },
        "ParagraphTable": {
            "composition": [
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
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
                34
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "langcode": [
                32
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
            "on_ParagraphInterface": [
                67
            ],
            "__typename": [
                84
            ]
        },
        "PhoneNumber": {},
        "Query": {
            "block": [
                9,
                {
                    "id": [
                        23,
                        "ID!"
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
                97
            ],
            "__typename": [
                84
            ]
        },
        "Route": {
            "internal": [
                10
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
                62
            ],
            "on_MetaTagInterface": [
                52
            ],
            "on_NodeInterface": [
                61
            ],
            "__typename": [
                84
            ]
        },
        "RouteExternal": {
            "internal": [
                10
            ],
            "url": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "RouteInternal": {
            "breadcrumbs": [
                37
            ],
            "entity": [
                77
            ],
            "internal": [
                10
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
                10
            ],
            "redirect": [
                10
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
                16
            ],
            "description": [
                90
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "parent": [
                89
            ],
            "path": [
                84
            ],
            "status": [
                10
            ],
            "weight": [
                30
            ],
            "on_TermTag": [
                88
            ],
            "__typename": [
                84
            ]
        },
        "TermTag": {
            "changed": [
                16
            ],
            "description": [
                90
            ],
            "id": [
                23
            ],
            "langcode": [
                32
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "parent": [
                89
            ],
            "path": [
                84
            ],
            "status": [
                10
            ],
            "weight": [
                30
            ],
            "__typename": [
                84
            ]
        },
        "TermUnion": {
            "on_TermTag": [
                88
            ],
            "on_MetaTagInterface": [
                52
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
                22
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
                22
            ],
            "summary": [
                22
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
                10
            ],
            "__typename": [
                84
            ]
        },
        "UntypedStructuredData": {},
        "User": {
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "mail": [
                19
            ],
            "metatag": [
                57
            ],
            "name": [
                84
            ],
            "roles": [
                99
            ],
            "status": [
                100
            ],
            "__typename": [
                84
            ]
        },
        "UserInterface": {
            "changed": [
                16
            ],
            "created": [
                16
            ],
            "id": [
                23
            ],
            "mail": [
                19
            ],
            "metatag": [
                57
            ],
            "name": [
                84
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
                84
            ]
        },
        "UserRoles": {},
        "UserStatus": {},
        "UserUnion": {
            "on_User": [
                97
            ],
            "on_MetaTagInterface": [
                52
            ],
            "on_UserInterface": [
                98
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
                23
            ],
            "label": [
                84
            ],
            "langcode": [
                84
            ],
            "pageInfo": [
                104
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
        "ViewReference": {
            "contextualFilter": [
                84
            ],
            "display": [
                84
            ],
            "pageSize": [
                30
            ],
            "query": [
                84
            ],
            "view": [
                84
            ],
            "__typename": [
                84
            ]
        },
        "ViewResultUnion": {
            "on_UnsupportedType": [
                95
            ],
            "__typename": [
                84
            ]
        }
    }
}
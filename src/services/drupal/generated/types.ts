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
        74,
        83,
        84,
        92,
        93,
        94,
        98,
        99,
        101
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
                84
            ],
            "__typename": [
                84
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
                84
            ],
            "on_BlockContentAnotherType": [
                4
            ],
            "on_BlockContentBasicBlock": [
                5
            ],
            "__typename": [
                84
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
                84
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
                84
            ],
            "on_BlockContent": [
                3
            ],
            "on_BlockPlugin": [
                9
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
                3
            ],
            "on_BlockPlugin": [
                9
            ],
            "on_BlockInterface": [
                8
            ],
            "__typename": [
                84
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
                84
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
                84
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
                15
            ],
            "node": [
                19
            ],
            "__typename": [
                84
            ]
        },
        "EdgeNode": {
            "id": [
                24
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
                31
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
                31
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
                31
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
                31
            ],
            "name": [
                84
            ],
            "url": [
                84
            ],
            "width": [
                31
            ],
            "__typename": [
                84
            ]
        },
        "ImageStyleInterface": {
            "id": [
                24
            ],
            "name": [
                84
            ],
            "on_ImageStyle": [
                26
            ],
            "__typename": [
                84
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
                34
            ],
            "position": [
                37
            ],
            "__typename": [
                84
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                35
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
            "internal": [
                11
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
                17
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "name": [
                84
            ],
            "status": [
                11
            ],
            "__typename": [
                84
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
            "name": [
                84
            ],
            "status": [
                11
            ],
            "__typename": [
                84
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
            "name": [
                84
            ],
            "status": [
                11
            ],
            "__typename": [
                84
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
            "name": [
                84
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
                84
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
            "name": [
                84
            ],
            "status": [
                11
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
            "__typename": [
                84
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
            "name": [
                84
            ],
            "status": [
                11
            ],
            "video": [
                21
            ],
            "__typename": [
                84
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
                84
            ],
            "__typename": [
                84
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
                84
            ],
            "on_Menu": [
                46
            ],
            "__typename": [
                84
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
                84
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
                46
            ],
            "on_MenuInterface": [
                48
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
                52
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
                11
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
                57
            ],
            "path": [
                84
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
                96
            ],
            "changed": [
                17
            ],
            "content": [
                73
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
                57
            ],
            "path": [
                84
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
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "items": [
                73
            ],
            "__typename": [
                84
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
            "__typename": [
                84
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
            "link": [
                38
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
                17
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
                84
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
                90
            ],
            "id": [
                24
            ],
            "media": [
                44
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
                35
            ],
            "created": [
                17
            ],
            "id": [
                24
            ],
            "link": [
                38
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
                35
            ],
            "created": [
                17
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
                35
            ],
            "created": [
                17
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
                35
            ],
            "created": [
                17
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
                36
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
                10,
                {
                    "id": [
                        24,
                        "ID!"
                    ]
                }
            ],
            "info": [
                82
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
        "Route": {
            "internal": [
                11
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
            "on_NodeInterface": [
                61
            ],
            "__typename": [
                84
            ]
        },
        "RouteExternal": {
            "internal": [
                11
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
                38
            ],
            "entity": [
                77
            ],
            "internal": [
                11
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
                11
            ],
            "redirect": [
                11
            ],
            "status": [
                31
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
                31
            ],
            "__typename": [
                84
            ]
        },
        "TermInterface": {
            "changed": [
                17
            ],
            "description": [
                90
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                11
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
                17
            ],
            "description": [
                90
            ],
            "id": [
                24
            ],
            "langcode": [
                33
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
                11
            ],
            "__typename": [
                84
            ]
        },
        "TermUnion": {
            "on_TermTags": [
                88
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
                11
            ],
            "__typename": [
                84
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
            "name": [
                84
            ],
            "roles": [
                98
            ],
            "status": [
                99
            ],
            "__typename": [
                84
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
                31
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
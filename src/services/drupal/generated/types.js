export default {
    "scalars": [
        10,
        13,
        15,
        16,
        17,
        20,
        24,
        40,
        70,
        79,
        80,
        88,
        89,
        90,
        92,
        93,
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
            "country": [
                1
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
        "AddressCountry": {
            "code": [
                80
            ],
            "name": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "BlockContent": {
            "entity": [
                6
            ],
            "id": [
                17
            ],
            "render": [
                16
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
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "reusable": [
                10
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
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "reusable": [
                10
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
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "reusable": [
                10
            ],
            "title": [
                80
            ],
            "on_BlockContentAnotherType": [
                3
            ],
            "on_BlockContentBasicBlock": [
                4
            ],
            "__typename": [
                80
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
            "on_MetaTagInterface": [
                46
            ],
            "__typename": [
                80
            ]
        },
        "BlockInterface": {
            "id": [
                17
            ],
            "render": [
                16
            ],
            "title": [
                80
            ],
            "on_BlockContent": [
                2
            ],
            "on_BlockPlugin": [
                8
            ],
            "__typename": [
                80
            ]
        },
        "BlockPlugin": {
            "id": [
                17
            ],
            "render": [
                16
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
                2
            ],
            "on_BlockPlugin": [
                8
            ],
            "on_BlockInterface": [
                7
            ],
            "__typename": [
                80
            ]
        },
        "Boolean": {},
        "DateRange": {
            "end": [
                12
            ],
            "start": [
                12
            ],
            "__typename": [
                80
            ]
        },
        "DateTime": {
            "offset": [
                93
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
                24
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
                24
            ],
            "mime": [
                80
            ],
            "size": [
                24
            ],
            "title": [
                80
            ],
            "url": [
                80
            ],
            "variations": [
                21,
                {
                    "styles": [
                        20,
                        "[ImageStyleAvailable]"
                    ]
                }
            ],
            "width": [
                24
            ],
            "__typename": [
                80
            ]
        },
        "ImageStyle": {
            "id": [
                17
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
                24
            ],
            "name": [
                80
            ],
            "url": [
                80
            ],
            "width": [
                24
            ],
            "__typename": [
                80
            ]
        },
        "ImageStyleInterface": {
            "id": [
                17
            ],
            "name": [
                80
            ],
            "on_ImageStyle": [
                19
            ],
            "__typename": [
                80
            ]
        },
        "ImageStyleUnion": {
            "on_ImageStyle": [
                19
            ],
            "on_ImageStyleInterface": [
                22
            ],
            "__typename": [
                80
            ]
        },
        "Int": {},
        "KeyValueInput": {
            "key": [
                80
            ],
            "value": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Language": {
            "direction": [
                80
            ],
            "id": [
                17
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
                17
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
                27
            ],
            "position": [
                30
            ],
            "__typename": [
                80
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                28
            ],
            "on_ParagraphAccordion": [
                60
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
                17
            ],
            "region": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "Link": {
            "internal": [
                10
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
                14
            ],
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "MediaDocument": {
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "document": [
                14
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "MediaImage": {
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "image": [
                18
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "MediaInterface": {
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "on_MediaAudio": [
                32
            ],
            "on_MediaDocument": [
                33
            ],
            "on_MediaImage": [
                34
            ],
            "on_MediaRemoteVideo": [
                36
            ],
            "on_MediaVideo": [
                38
            ],
            "__typename": [
                80
            ]
        },
        "MediaRemoteVideo": {
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                10
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
                32
            ],
            "on_MediaDocument": [
                33
            ],
            "on_MediaImage": [
                34
            ],
            "on_MediaRemoteVideo": [
                36
            ],
            "on_MediaVideo": [
                38
            ],
            "on_MediaInterface": [
                35
            ],
            "on_MetaTagInterface": [
                46
            ],
            "__typename": [
                80
            ]
        },
        "MediaVideo": {
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "video": [
                14
            ],
            "__typename": [
                80
            ]
        },
        "Menu": {
            "id": [
                17
            ],
            "items": [
                42
            ],
            "name": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MenuAvailable": {},
        "MenuInterface": {
            "id": [
                17
            ],
            "items": [
                42
            ],
            "name": [
                80
            ],
            "on_Menu": [
                39
            ],
            "__typename": [
                80
            ]
        },
        "MenuItem": {
            "attributes": [
                43
            ],
            "children": [
                42
            ],
            "description": [
                80
            ],
            "expanded": [
                10
            ],
            "id": [
                17
            ],
            "internal": [
                10
            ],
            "langcode": [
                26
            ],
            "route": [
                77
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
        "MenuItemAttributes": {
            "class": [
                80
            ],
            "id": [
                80
            ],
            "target": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MenuUnion": {
            "on_Menu": [
                39
            ],
            "on_MenuInterface": [
                41
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
            "on_MetaTagScript": [
                51
            ],
            "on_MetaTagValue": [
                54
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagInterface": {
            "metatag": [
                53
            ],
            "on_BlockContentAnotherType": [
                3
            ],
            "on_BlockContentBasicBlock": [
                4
            ],
            "on_MediaAudio": [
                32
            ],
            "on_MediaDocument": [
                33
            ],
            "on_MediaImage": [
                34
            ],
            "on_MediaRemoteVideo": [
                36
            ],
            "on_MediaVideo": [
                38
            ],
            "on_NodePage": [
                58
            ],
            "on_TermTag": [
                84
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
            "hreflang": [
                80
            ],
            "media": [
                80
            ],
            "rel": [
                80
            ],
            "sizes": [
                80
            ],
            "type": [
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
        "MetaTagScript": {
            "attributes": [
                52
            ],
            "content": [
                80
            ],
            "tag": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagScriptAttributes": {
            "integrity": [
                80
            ],
            "src": [
                80
            ],
            "type": [
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
            "on_MetaTagScript": [
                51
            ],
            "on_MetaTagValue": [
                54
            ],
            "on_MetaTag": [
                45
            ],
            "__typename": [
                80
            ]
        },
        "MetaTagValue": {
            "attributes": [
                55
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
        "Mutation": {
            "_": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "NodeInterface": {
            "changed": [
                12
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "path": [
                80
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
                80
            ],
            "on_NodePage": [
                58
            ],
            "__typename": [
                80
            ]
        },
        "NodePage": {
            "changed": [
                12
            ],
            "content": [
                69
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "path": [
                80
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
                80
            ],
            "__typename": [
                80
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                58
            ],
            "on_MetaTagInterface": [
                46
            ],
            "on_NodeInterface": [
                57
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphAccordion": {
            "accordionTitle": [
                80
            ],
            "composition": [
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "items": [
                69
            ],
            "langcode": [
                26
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphBlock": {
            "block": [
                9
            ],
            "composition": [
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphCallToAction": {
            "composition": [
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "link": [
                31
            ],
            "status": [
                10
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
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "status": [
                10
            ],
            "on_ParagraphAccordion": [
                60
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
                28
            ],
            "created": [
                12
            ],
            "description": [
                86
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "media": [
                37
            ],
            "status": [
                10
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
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "link": [
                31
            ],
            "quote": [
                86
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphSection": {
            "composition": [
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "status": [
                10
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphTable": {
            "composition": [
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "status": [
                10
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
                28
            ],
            "created": [
                12
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "status": [
                10
            ],
            "text": [
                86
            ],
            "__typename": [
                80
            ]
        },
        "ParagraphUnion": {
            "on_ParagraphAccordion": [
                60
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
            "on_LayoutParagraphsInterface": [
                29
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
                9,
                {
                    "id": [
                        17,
                        "ID!"
                    ]
                }
            ],
            "info": [
                78
            ],
            "menu": [
                39,
                {
                    "name": [
                        40,
                        "MenuAvailable!"
                    ]
                }
            ],
            "route": [
                77,
                {
                    "path": [
                        80,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                80
            ]
        },
        "Route": {
            "internal": [
                10
            ],
            "url": [
                80
            ],
            "on_RouteExternal": [
                74
            ],
            "on_RouteInternal": [
                75
            ],
            "on_RouteRedirect": [
                76
            ],
            "__typename": [
                80
            ]
        },
        "RouteEntityUnion": {
            "on_NodePage": [
                58
            ],
            "on_MetaTagInterface": [
                46
            ],
            "on_NodeInterface": [
                57
            ],
            "__typename": [
                80
            ]
        },
        "RouteExternal": {
            "internal": [
                10
            ],
            "url": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "RouteInternal": {
            "breadcrumbs": [
                31
            ],
            "entity": [
                73
            ],
            "internal": [
                10
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
                10
            ],
            "redirect": [
                10
            ],
            "status": [
                24
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
                74
            ],
            "on_RouteInternal": [
                75
            ],
            "on_RouteRedirect": [
                76
            ],
            "on_Route": [
                72
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
        "SortDirection": {},
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
                24
            ],
            "__typename": [
                80
            ]
        },
        "TermInterface": {
            "changed": [
                12
            ],
            "description": [
                86
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "parent": [
                85
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "weight": [
                24
            ],
            "on_TermTag": [
                84
            ],
            "__typename": [
                80
            ]
        },
        "TermTag": {
            "changed": [
                12
            ],
            "description": [
                86
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                53
            ],
            "name": [
                80
            ],
            "parent": [
                85
            ],
            "path": [
                80
            ],
            "status": [
                10
            ],
            "weight": [
                24
            ],
            "__typename": [
                80
            ]
        },
        "TermUnion": {
            "on_TermTag": [
                84
            ],
            "on_MetaTagInterface": [
                46
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
                16
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
                16
            ],
            "summary": [
                16
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
                10
            ],
            "__typename": [
                80
            ]
        },
        "UntypedStructuredData": {},
        "UtcOffset": {},
        "View": {
            "description": [
                80
            ],
            "display": [
                80
            ],
            "id": [
                17
            ],
            "label": [
                80
            ],
            "langcode": [
                80
            ],
            "pageInfo": [
                95
            ],
            "view": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ViewPageInfo": {
            "offset": [
                24
            ],
            "page": [
                24
            ],
            "pageSize": [
                24
            ],
            "total": [
                24
            ],
            "__typename": [
                80
            ]
        },
        "ViewReference": {
            "contextualFilter": [
                80
            ],
            "display": [
                80
            ],
            "pageSize": [
                24
            ],
            "query": [
                80
            ],
            "view": [
                80
            ],
            "__typename": [
                80
            ]
        },
        "ViewResultUnion": {
            "on_UnsupportedType": [
                91
            ],
            "__typename": [
                80
            ]
        },
        "_": {}
    }
};

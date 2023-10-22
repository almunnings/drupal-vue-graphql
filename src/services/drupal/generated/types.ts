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
        68,
        77,
        78,
        86,
        87,
        88,
        90,
        91
    ],
    "types": {
        "Address": {
            "additionalName": [
                78
            ],
            "addressLine1": [
                78
            ],
            "addressLine2": [
                78
            ],
            "administrativeArea": [
                78
            ],
            "country": [
                1
            ],
            "dependentLocality": [
                78
            ],
            "familyName": [
                78
            ],
            "givenName": [
                78
            ],
            "langcode": [
                78
            ],
            "locality": [
                78
            ],
            "organization": [
                78
            ],
            "postalCode": [
                78
            ],
            "sortingCode": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "AddressCountry": {
            "code": [
                78
            ],
            "name": [
                78
            ],
            "__typename": [
                78
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
                78
            ],
            "__typename": [
                78
            ]
        },
        "BlockContentAnotherType": {
            "body": [
                85
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
            "reusable": [
                10
            ],
            "title": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "BlockContentBasicBlock": {
            "body": [
                85
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
            "reusable": [
                10
            ],
            "title": [
                78
            ],
            "__typename": [
                78
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
            "reusable": [
                10
            ],
            "title": [
                78
            ],
            "on_BlockContentAnotherType": [
                3
            ],
            "on_BlockContentBasicBlock": [
                4
            ],
            "__typename": [
                78
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
                78
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
                78
            ],
            "on_BlockContent": [
                2
            ],
            "on_BlockPlugin": [
                8
            ],
            "__typename": [
                78
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
                78
            ],
            "__typename": [
                78
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
                78
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
                78
            ]
        },
        "DateTime": {
            "offset": [
                91
            ],
            "time": [
                86
            ],
            "timestamp": [
                88
            ],
            "timezone": [
                87
            ],
            "__typename": [
                78
            ]
        },
        "Email": {},
        "File": {
            "description": [
                78
            ],
            "mime": [
                78
            ],
            "name": [
                78
            ],
            "size": [
                24
            ],
            "url": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "Float": {},
        "Html": {},
        "ID": {},
        "Image": {
            "alt": [
                78
            ],
            "height": [
                24
            ],
            "mime": [
                78
            ],
            "size": [
                24
            ],
            "title": [
                78
            ],
            "url": [
                78
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
                78
            ]
        },
        "ImageStyle": {
            "id": [
                17
            ],
            "name": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "ImageStyleAvailable": {},
        "ImageStyleDerivative": {
            "height": [
                24
            ],
            "name": [
                78
            ],
            "url": [
                78
            ],
            "width": [
                24
            ],
            "__typename": [
                78
            ]
        },
        "ImageStyleInterface": {
            "id": [
                17
            ],
            "name": [
                78
            ],
            "on_ImageStyle": [
                19
            ],
            "__typename": [
                78
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
                78
            ]
        },
        "Int": {},
        "KeyValueInput": {
            "key": [
                78
            ],
            "value": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "Language": {
            "direction": [
                78
            ],
            "id": [
                17
            ],
            "name": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "Layout": {
            "category": [
                78
            ],
            "defaultRegion": [
                78
            ],
            "id": [
                17
            ],
            "label": [
                78
            ],
            "regions": [
                78
            ],
            "__typename": [
                78
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
                78
            ]
        },
        "LayoutParagraphsInterface": {
            "composition": [
                28
            ],
            "on_ParagraphAccordion": [
                58
            ],
            "on_ParagraphBlock": [
                59
            ],
            "on_ParagraphCallToAction": [
                60
            ],
            "on_ParagraphMedia": [
                62
            ],
            "on_ParagraphQuote": [
                63
            ],
            "on_ParagraphSection": [
                64
            ],
            "on_ParagraphTable": [
                65
            ],
            "on_ParagraphText": [
                66
            ],
            "__typename": [
                78
            ]
        },
        "LayoutParagraphsPosition": {
            "parentId": [
                17
            ],
            "region": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "Link": {
            "internal": [
                10
            ],
            "title": [
                78
            ],
            "url": [
                78
            ],
            "__typename": [
                78
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
                51
            ],
            "name": [
                78
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "__typename": [
                78
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
                51
            ],
            "name": [
                78
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "__typename": [
                78
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
                51
            ],
            "name": [
                78
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "__typename": [
                78
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
                51
            ],
            "name": [
                78
            ],
            "path": [
                78
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
                78
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
                51
            ],
            "name": [
                78
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "url": [
                78
            ],
            "__typename": [
                78
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
                78
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
                51
            ],
            "name": [
                78
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "video": [
                14
            ],
            "__typename": [
                78
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
                78
            ],
            "__typename": [
                78
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
                78
            ],
            "on_Menu": [
                39
            ],
            "__typename": [
                78
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
                78
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
            "route": [
                75
            ],
            "title": [
                78
            ],
            "url": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "MenuItemAttributes": {
            "class": [
                78
            ],
            "id": [
                78
            ],
            "target": [
                78
            ],
            "__typename": [
                78
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
                78
            ]
        },
        "MetaTag": {
            "tag": [
                78
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
                78
            ]
        },
        "MetaTagInterface": {
            "metatag": [
                51
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
                56
            ],
            "on_ParagraphAccordion": [
                58
            ],
            "on_ParagraphBlock": [
                59
            ],
            "on_ParagraphCallToAction": [
                60
            ],
            "on_ParagraphMedia": [
                62
            ],
            "on_ParagraphQuote": [
                63
            ],
            "on_ParagraphSection": [
                64
            ],
            "on_ParagraphTable": [
                65
            ],
            "on_ParagraphText": [
                66
            ],
            "on_TermTag": [
                82
            ],
            "__typename": [
                78
            ]
        },
        "MetaTagLink": {
            "attributes": [
                48
            ],
            "tag": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "MetaTagLinkAttributes": {
            "href": [
                78
            ],
            "rel": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "MetaTagProperty": {
            "attributes": [
                50
            ],
            "tag": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "MetaTagPropertyAttributes": {
            "content": [
                78
            ],
            "property": [
                78
            ],
            "__typename": [
                78
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
                45
            ],
            "__typename": [
                78
            ]
        },
        "MetaTagValue": {
            "attributes": [
                53
            ],
            "tag": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "MetaTagValueAttributes": {
            "content": [
                78
            ],
            "name": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "Mutation": {
            "_": [
                10
            ],
            "__typename": [
                78
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
                51
            ],
            "path": [
                78
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
                78
            ],
            "on_NodePage": [
                56
            ],
            "__typename": [
                78
            ]
        },
        "NodePage": {
            "changed": [
                12
            ],
            "content": [
                67
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
                51
            ],
            "path": [
                78
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
                78
            ],
            "__typename": [
                78
            ]
        },
        "NodeUnion": {
            "on_NodePage": [
                56
            ],
            "on_MetaTagInterface": [
                46
            ],
            "on_NodeInterface": [
                55
            ],
            "__typename": [
                78
            ]
        },
        "ParagraphAccordion": {
            "accordionTitle": [
                78
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
                67
            ],
            "langcode": [
                26
            ],
            "__typename": [
                78
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
            "__typename": [
                78
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
            "text": [
                84
            ],
            "title": [
                78
            ],
            "__typename": [
                78
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
            "on_ParagraphAccordion": [
                58
            ],
            "on_ParagraphBlock": [
                59
            ],
            "on_ParagraphCallToAction": [
                60
            ],
            "on_ParagraphMedia": [
                62
            ],
            "on_ParagraphQuote": [
                63
            ],
            "on_ParagraphSection": [
                64
            ],
            "on_ParagraphTable": [
                65
            ],
            "on_ParagraphText": [
                66
            ],
            "__typename": [
                78
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
                84
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
            "title": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "ParagraphQuote": {
            "citation": [
                78
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
                84
            ],
            "__typename": [
                78
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
            "__typename": [
                78
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
            "table": [
                79
            ],
            "title": [
                78
            ],
            "__typename": [
                78
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
            "text": [
                84
            ],
            "__typename": [
                78
            ]
        },
        "ParagraphUnion": {
            "on_ParagraphAccordion": [
                58
            ],
            "on_ParagraphBlock": [
                59
            ],
            "on_ParagraphCallToAction": [
                60
            ],
            "on_ParagraphMedia": [
                62
            ],
            "on_ParagraphQuote": [
                63
            ],
            "on_ParagraphSection": [
                64
            ],
            "on_ParagraphTable": [
                65
            ],
            "on_ParagraphText": [
                66
            ],
            "on_LayoutParagraphsInterface": [
                29
            ],
            "on_MetaTagInterface": [
                46
            ],
            "on_ParagraphInterface": [
                61
            ],
            "__typename": [
                78
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
                76
            ],
            "menu": [
                39,
                {
                    "langcode": [
                        78
                    ],
                    "name": [
                        40,
                        "MenuAvailable!"
                    ]
                }
            ],
            "route": [
                75,
                {
                    "langcode": [
                        78
                    ],
                    "path": [
                        78,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                78
            ]
        },
        "Route": {
            "internal": [
                10
            ],
            "url": [
                78
            ],
            "on_RouteExternal": [
                72
            ],
            "on_RouteInternal": [
                73
            ],
            "on_RouteRedirect": [
                74
            ],
            "__typename": [
                78
            ]
        },
        "RouteEntityUnion": {
            "on_NodePage": [
                56
            ],
            "on_MetaTagInterface": [
                46
            ],
            "on_NodeInterface": [
                55
            ],
            "__typename": [
                78
            ]
        },
        "RouteExternal": {
            "internal": [
                10
            ],
            "url": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "RouteInternal": {
            "breadcrumbs": [
                31
            ],
            "entity": [
                71
            ],
            "internal": [
                10
            ],
            "url": [
                78
            ],
            "__typename": [
                78
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
                78
            ],
            "__typename": [
                78
            ]
        },
        "RouteUnion": {
            "on_RouteExternal": [
                72
            ],
            "on_RouteInternal": [
                73
            ],
            "on_RouteRedirect": [
                74
            ],
            "on_Route": [
                70
            ],
            "__typename": [
                78
            ]
        },
        "SchemaInformation": {
            "description": [
                78
            ],
            "home": [
                78
            ],
            "version": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "SortDirection": {},
        "String": {},
        "Table": {
            "caption": [
                78
            ],
            "format": [
                78
            ],
            "rows": [
                80
            ],
            "__typename": [
                78
            ]
        },
        "TableRow": {
            "data": [
                78
            ],
            "weight": [
                24
            ],
            "__typename": [
                78
            ]
        },
        "TermInterface": {
            "changed": [
                12
            ],
            "description": [
                84
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                51
            ],
            "name": [
                78
            ],
            "parent": [
                83
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "weight": [
                24
            ],
            "on_TermTag": [
                82
            ],
            "__typename": [
                78
            ]
        },
        "TermTag": {
            "changed": [
                12
            ],
            "description": [
                84
            ],
            "id": [
                17
            ],
            "langcode": [
                26
            ],
            "metatag": [
                51
            ],
            "name": [
                78
            ],
            "parent": [
                83
            ],
            "path": [
                78
            ],
            "status": [
                10
            ],
            "weight": [
                24
            ],
            "__typename": [
                78
            ]
        },
        "TermUnion": {
            "on_TermTag": [
                82
            ],
            "on_MetaTagInterface": [
                46
            ],
            "on_TermInterface": [
                81
            ],
            "__typename": [
                78
            ]
        },
        "Text": {
            "format": [
                78
            ],
            "processed": [
                16
            ],
            "value": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "TextSummary": {
            "format": [
                78
            ],
            "processed": [
                16
            ],
            "summary": [
                16
            ],
            "value": [
                78
            ],
            "__typename": [
                78
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
                78
            ]
        },
        "UntypedStructuredData": {},
        "UtcOffset": {},
        "View": {
            "description": [
                78
            ],
            "display": [
                78
            ],
            "id": [
                17
            ],
            "label": [
                78
            ],
            "langcode": [
                78
            ],
            "pageInfo": [
                93
            ],
            "view": [
                78
            ],
            "__typename": [
                78
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
                78
            ]
        },
        "ViewReference": {
            "contextualFilter": [
                78
            ],
            "display": [
                78
            ],
            "pageSize": [
                24
            ],
            "query": [
                78
            ],
            "view": [
                78
            ],
            "__typename": [
                78
            ]
        },
        "ViewResultUnion": {
            "on_UnsupportedType": [
                89
            ],
            "__typename": [
                78
            ]
        }
    }
}
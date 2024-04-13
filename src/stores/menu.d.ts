import type { MenuInterface, MenuAvailable } from '@/services/drupal';
export declare const useMenuStore: import("pinia").StoreDefinition<"menu", import("pinia")._UnwrapAll<Pick<{
    menus: Map<string, {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }> & Omit<Map<string, MenuInterface>, keyof Map<any, any>>;
    errors: Map<string, {
        name: string;
        message: string;
        stack?: string | undefined;
    }> & Omit<Map<string, Error>, keyof Map<any, any>>;
    loading: Map<string, boolean> & Omit<Map<string, boolean>, keyof Map<any, any>>;
    fetchMenu: (name: MenuAvailable) => Promise<(Map<string, {
        name: string;
        message: string;
        stack?: string | undefined;
    }> & Omit<Map<string, Error>, keyof Map<any, any>>) | (Map<string, {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }> & Omit<Map<string, MenuInterface>, keyof Map<any, any>>) | {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }>;
}, "errors" | "loading" | "menus">>, Pick<{
    menus: Map<string, {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }> & Omit<Map<string, MenuInterface>, keyof Map<any, any>>;
    errors: Map<string, {
        name: string;
        message: string;
        stack?: string | undefined;
    }> & Omit<Map<string, Error>, keyof Map<any, any>>;
    loading: Map<string, boolean> & Omit<Map<string, boolean>, keyof Map<any, any>>;
    fetchMenu: (name: MenuAvailable) => Promise<(Map<string, {
        name: string;
        message: string;
        stack?: string | undefined;
    }> & Omit<Map<string, Error>, keyof Map<any, any>>) | (Map<string, {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }> & Omit<Map<string, MenuInterface>, keyof Map<any, any>>) | {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }>;
}, never>, Pick<{
    menus: Map<string, {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }> & Omit<Map<string, MenuInterface>, keyof Map<any, any>>;
    errors: Map<string, {
        name: string;
        message: string;
        stack?: string | undefined;
    }> & Omit<Map<string, Error>, keyof Map<any, any>>;
    loading: Map<string, boolean> & Omit<Map<string, boolean>, keyof Map<any, any>>;
    fetchMenu: (name: MenuAvailable) => Promise<(Map<string, {
        name: string;
        message: string;
        stack?: string | undefined;
    }> & Omit<Map<string, Error>, keyof Map<any, any>>) | (Map<string, {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }> & Omit<Map<string, MenuInterface>, keyof Map<any, any>>) | {
        id: string;
        items: {
            attributes: {
                class: string | null;
                id: string | null;
                target: string | null;
                __typename: "MenuItemAttributes";
            };
            children: any[];
            description: string | null;
            expanded: boolean;
            id: string;
            internal: boolean;
            langcode: {
                direction: string | null;
                id: string | null;
                name: string | null;
                __typename: "Language";
            };
            route: {
                internal: boolean;
                url: string;
                __typename: "RouteExternal";
                __isUnion?: true | undefined;
            } | {
                breadcrumbs: {
                    internal: boolean;
                    title: string | null;
                    url: string | null;
                    __typename: "Link";
                }[] | null;
                entity: {
                    changed: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    content: ({
                        accordionTitle: string;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        items: (any | {
                            block: {
                                entity: {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentAnotherType";
                                    __isUnion?: true | undefined;
                                } | {
                                    body: {
                                        format: string | null;
                                        processed: any;
                                        summary: any;
                                        value: string | null;
                                        __typename: "TextSummary";
                                    } | null;
                                    changed: {
                                        offset: any;
                                        time: any;
                                        timestamp: any;
                                        timezone: any;
                                        __typename: "DateTime";
                                    };
                                    id: string;
                                    langcode: {
                                        direction: string | null;
                                        id: string | null;
                                        name: string | null;
                                        __typename: "Language";
                                    };
                                    metatag: ({
                                        attributes: {
                                            href: string | null;
                                            hreflang: string | null;
                                            media: string | null;
                                            rel: string | null;
                                            sizes: string | null;
                                            type: string | null;
                                            __typename: "MetaTagLinkAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagLink";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            property: string | null;
                                            __typename: "MetaTagPropertyAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagProperty";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            integrity: string | null;
                                            src: string | null;
                                            type: string | null;
                                            __typename: "MetaTagScriptAttributes";
                                        };
                                        content: string | null;
                                        tag: string;
                                        __typename: "MetaTagScript";
                                        __isUnion?: true | undefined;
                                    } | {
                                        attributes: {
                                            content: string | null;
                                            name: string | null;
                                            __typename: "MetaTagValueAttributes";
                                        };
                                        tag: string;
                                        __typename: "MetaTagValue";
                                        __isUnion?: true | undefined;
                                    })[];
                                    reusable: boolean;
                                    title: string;
                                    __typename: "BlockContentBasicBlock";
                                    __isUnion?: true | undefined;
                                };
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockContent";
                                __isUnion?: true | undefined;
                            } | {
                                id: string;
                                render: any;
                                title: string | null;
                                __typename: "BlockPlugin";
                                __isUnion?: true | undefined;
                            } | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphBlock";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            title: string | null;
                            __typename: "ParagraphCallToAction";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            description: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            } | null;
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            media: {
                                audio: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaAudio";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                document: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaDocument";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                image: {
                                    alt: string | null;
                                    height: number;
                                    mime: string | null;
                                    size: number;
                                    title: string | null;
                                    url: string;
                                    variations: {
                                        height: number;
                                        name: string;
                                        url: string;
                                        width: number;
                                        __typename: "ImageStyleDerivative";
                                    }[] | null;
                                    width: number;
                                    __typename: "Image";
                                };
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                __typename: "MediaImage";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                url: string;
                                __typename: "MediaRemoteVideo";
                                __isUnion?: true | undefined;
                            } | {
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                created: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                name: string;
                                path: string;
                                status: boolean;
                                video: {
                                    description: string | null;
                                    mime: string | null;
                                    name: string | null;
                                    size: number;
                                    url: string;
                                    __typename: "File";
                                };
                                __typename: "MediaVideo";
                                __isUnion?: true | undefined;
                            };
                            status: boolean;
                            title: string | null;
                            __typename: "ParagraphMedia";
                            __isUnion?: true | undefined;
                        } | {
                            citation: string | null;
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            link: {
                                internal: boolean;
                                title: string | null;
                                url: string | null;
                                __typename: "Link";
                            } | null;
                            quote: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            status: boolean;
                            __typename: "ParagraphQuote";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            __typename: "ParagraphSection";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            table: {
                                caption: string | null;
                                format: string | null;
                                rows: ({
                                    data: (string | null)[] | null;
                                    weight: number | null;
                                    __typename: "TableRow";
                                } | null)[] | null;
                                __typename: "Table";
                            };
                            title: string | null;
                            __typename: "ParagraphTable";
                            __isUnion?: true | undefined;
                        } | {
                            composition: {
                                layout: {
                                    category: string;
                                    defaultRegion: string;
                                    id: string;
                                    label: string;
                                    regions: string[];
                                    __typename: "Layout";
                                } | null;
                                position: {
                                    parentId: string | null;
                                    region: string | null;
                                    __typename: "LayoutParagraphsPosition";
                                } | null;
                                __typename: "LayoutParagraphs";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            status: boolean;
                            text: {
                                format: string | null;
                                processed: any;
                                value: string | null;
                                __typename: "Text";
                            };
                            __typename: "ParagraphText";
                            __isUnion?: true | undefined;
                        })[];
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphAccordion";
                        __isUnion?: true | undefined;
                    } | {
                        block: {
                            entity: {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentAnotherType";
                                __isUnion?: true | undefined;
                            } | {
                                body: {
                                    format: string | null;
                                    processed: any;
                                    summary: any;
                                    value: string | null;
                                    __typename: "TextSummary";
                                } | null;
                                changed: {
                                    offset: any;
                                    time: any;
                                    timestamp: any;
                                    timezone: any;
                                    __typename: "DateTime";
                                };
                                id: string;
                                langcode: {
                                    direction: string | null;
                                    id: string | null;
                                    name: string | null;
                                    __typename: "Language";
                                };
                                metatag: ({
                                    attributes: {
                                        href: string | null;
                                        hreflang: string | null;
                                        media: string | null;
                                        rel: string | null;
                                        sizes: string | null;
                                        type: string | null;
                                        __typename: "MetaTagLinkAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagLink";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        property: string | null;
                                        __typename: "MetaTagPropertyAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagProperty";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        integrity: string | null;
                                        src: string | null;
                                        type: string | null;
                                        __typename: "MetaTagScriptAttributes";
                                    };
                                    content: string | null;
                                    tag: string;
                                    __typename: "MetaTagScript";
                                    __isUnion?: true | undefined;
                                } | {
                                    attributes: {
                                        content: string | null;
                                        name: string | null;
                                        __typename: "MetaTagValueAttributes";
                                    };
                                    tag: string;
                                    __typename: "MetaTagValue";
                                    __isUnion?: true | undefined;
                                })[];
                                reusable: boolean;
                                title: string;
                                __typename: "BlockContentBasicBlock";
                                __isUnion?: true | undefined;
                            };
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockContent";
                            __isUnion?: true | undefined;
                        } | {
                            id: string;
                            render: any;
                            title: string | null;
                            __typename: "BlockPlugin";
                            __isUnion?: true | undefined;
                        } | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphBlock";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        title: string | null;
                        __typename: "ParagraphCallToAction";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        description: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        } | null;
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        media: {
                            audio: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaAudio";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            document: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaDocument";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            image: {
                                alt: string | null;
                                height: number;
                                mime: string | null;
                                size: number;
                                title: string | null;
                                url: string;
                                variations: {
                                    height: number;
                                    name: string;
                                    url: string;
                                    width: number;
                                    __typename: "ImageStyleDerivative";
                                }[] | null;
                                width: number;
                                __typename: "Image";
                            };
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            __typename: "MediaImage";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            url: string;
                            __typename: "MediaRemoteVideo";
                            __isUnion?: true | undefined;
                        } | {
                            changed: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            created: {
                                offset: any;
                                time: any;
                                timestamp: any;
                                timezone: any;
                                __typename: "DateTime";
                            };
                            id: string;
                            langcode: {
                                direction: string | null;
                                id: string | null;
                                name: string | null;
                                __typename: "Language";
                            };
                            metatag: ({
                                attributes: {
                                    href: string | null;
                                    hreflang: string | null;
                                    media: string | null;
                                    rel: string | null;
                                    sizes: string | null;
                                    type: string | null;
                                    __typename: "MetaTagLinkAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagLink";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    property: string | null;
                                    __typename: "MetaTagPropertyAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagProperty";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    integrity: string | null;
                                    src: string | null;
                                    type: string | null;
                                    __typename: "MetaTagScriptAttributes";
                                };
                                content: string | null;
                                tag: string;
                                __typename: "MetaTagScript";
                                __isUnion?: true | undefined;
                            } | {
                                attributes: {
                                    content: string | null;
                                    name: string | null;
                                    __typename: "MetaTagValueAttributes";
                                };
                                tag: string;
                                __typename: "MetaTagValue";
                                __isUnion?: true | undefined;
                            })[];
                            name: string;
                            path: string;
                            status: boolean;
                            video: {
                                description: string | null;
                                mime: string | null;
                                name: string | null;
                                size: number;
                                url: string;
                                __typename: "File";
                            };
                            __typename: "MediaVideo";
                            __isUnion?: true | undefined;
                        };
                        status: boolean;
                        title: string | null;
                        __typename: "ParagraphMedia";
                        __isUnion?: true | undefined;
                    } | {
                        citation: string | null;
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        link: {
                            internal: boolean;
                            title: string | null;
                            url: string | null;
                            __typename: "Link";
                        } | null;
                        quote: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        status: boolean;
                        __typename: "ParagraphQuote";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        __typename: "ParagraphSection";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        table: {
                            caption: string | null;
                            format: string | null;
                            rows: ({
                                data: (string | null)[] | null;
                                weight: number | null;
                                __typename: "TableRow";
                            } | null)[] | null;
                            __typename: "Table";
                        };
                        title: string | null;
                        __typename: "ParagraphTable";
                        __isUnion?: true | undefined;
                    } | {
                        composition: {
                            layout: {
                                category: string;
                                defaultRegion: string;
                                id: string;
                                label: string;
                                regions: string[];
                                __typename: "Layout";
                            } | null;
                            position: {
                                parentId: string | null;
                                region: string | null;
                                __typename: "LayoutParagraphsPosition";
                            } | null;
                            __typename: "LayoutParagraphs";
                        };
                        created: {
                            offset: any;
                            time: any;
                            timestamp: any;
                            timezone: any;
                            __typename: "DateTime";
                        };
                        id: string;
                        langcode: {
                            direction: string | null;
                            id: string | null;
                            name: string | null;
                            __typename: "Language";
                        };
                        status: boolean;
                        text: {
                            format: string | null;
                            processed: any;
                            value: string | null;
                            __typename: "Text";
                        };
                        __typename: "ParagraphText";
                        __isUnion?: true | undefined;
                    })[] | null;
                    created: {
                        offset: any;
                        time: any;
                        timestamp: any;
                        timezone: any;
                        __typename: "DateTime";
                    };
                    id: string;
                    langcode: {
                        direction: string | null;
                        id: string | null;
                        name: string | null;
                        __typename: "Language";
                    };
                    metatag: ({
                        attributes: {
                            href: string | null;
                            hreflang: string | null;
                            media: string | null;
                            rel: string | null;
                            sizes: string | null;
                            type: string | null;
                            __typename: "MetaTagLinkAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagLink";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            property: string | null;
                            __typename: "MetaTagPropertyAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagProperty";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            integrity: string | null;
                            src: string | null;
                            type: string | null;
                            __typename: "MetaTagScriptAttributes";
                        };
                        content: string | null;
                        tag: string;
                        __typename: "MetaTagScript";
                        __isUnion?: true | undefined;
                    } | {
                        attributes: {
                            content: string | null;
                            name: string | null;
                            __typename: "MetaTagValueAttributes";
                        };
                        tag: string;
                        __typename: "MetaTagValue";
                        __isUnion?: true | undefined;
                    })[];
                    path: string;
                    promote: boolean;
                    status: boolean;
                    sticky: boolean;
                    title: string;
                    __typename: "NodePage";
                    __isUnion?: true | undefined;
                } | null;
                internal: boolean;
                url: string;
                __typename: "RouteInternal";
                __isUnion?: true | undefined;
            } | {
                internal: boolean;
                redirect: boolean;
                status: number;
                url: string;
                __typename: "RouteRedirect";
                __isUnion?: true | undefined;
            } | null;
            title: string;
            url: string | null;
            __typename: "MenuItem";
        }[];
        name: string;
        __typename: "Menu";
        __isUnion?: true | undefined;
    }>;
}, "fetchMenu">>;

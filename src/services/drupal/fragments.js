/**
 * Custom fragments to use in queries.
 */
export const RouteFragment = {
    __typename: true,
    url: true,
    internal: true
};
export const LinkFragment = {
    url: true,
    title: true,
    internal: true
};
export const ParagraphTextFragment = {
    text: {
        processed: true
    }
};
export const ParagraphQuoteFragment = {
    quote: {
        processed: true
    },
    citation: true,
    link: LinkFragment
};
export const ParagraphMediaFragment = {
    title: true,
    description: {
        processed: true
    },
    media: {
        __typename: true,
        on_MediaInterface: {
            name: true
        },
        on_MediaAudio: {
            audio: {
                url: true,
                mime: true,
                size: true
            }
        },
        on_MediaDocument: {
            document: {
                url: true,
                name: true,
                mime: true,
                size: true,
                description: true
            }
        },
        on_MediaImage: {
            __typename: true,
            image: {
                url: true,
                width: true,
                height: true,
                alt: true,
                title: true,
                mime: true,
                variations: {
                    __args: {
                        styles: ['WIDE', 'WIDE2X', 'LARGE', 'LARGE2X', 'MEDIUM', 'MEDIUM2X', 'THUMBNAIL']
                    },
                    url: true,
                    width: true,
                    height: true,
                    name: true
                }
            }
        },
        on_MediaRemoteVideo: {
            url: true
        },
        on_MediaVideo: {
            video: {
                url: true,
                mime: true
            }
        }
    }
};
export const ParagraphTableFragment = {
    title: true,
    table: {
        caption: true,
        format: true,
        rows: {
            data: true,
            weight: true
        }
    }
};
export const ParagraphAccordionFragment = {
    accordionTitle: true,
    items: {
        __typename: true,
        on_ParagraphText: ParagraphTextFragment,
        on_ParagraphQuote: ParagraphQuoteFragment,
        on_ParagraphMedia: ParagraphMediaFragment,
        on_ParagraphTable: ParagraphTableFragment
    }
};
export const ParagraphBlockFragment = {
    block: {
        __typename: true,
        on_BlockInterface: {
            id: true,
            title: true
        },
        on_BlockPlugin: {
            render: true
        },
        on_BlockContent: {
            entity: {
                __typename: true,
                on_BlockContentInterface: {
                    id: true,
                    title: true
                },
                on_BlockContentBasicBlock: {
                    body: {
                        processed: true
                    }
                }
            }
        }
    }
};
export const ParagraphFragment = {
    __typename: true,
    id: true,
    on_ParagraphBlock: ParagraphBlockFragment,
    on_ParagraphText: ParagraphTextFragment,
    on_ParagraphQuote: ParagraphQuoteFragment,
    on_ParagraphMedia: ParagraphMediaFragment,
    on_ParagraphTable: ParagraphTableFragment,
    on_ParagraphAccordion: ParagraphAccordionFragment
};
export const LayoutParagraphFragment = {
    __typename: true,
    composition: {
        layout: {
            id: true,
            regions: true
        },
        position: {
            parentId: true,
            region: true
        }
    }
};
export const NodePageFragment = {
    __typename: true,
    content: {
        on_ParagraphInterface: ParagraphFragment,
        on_LayoutParagraphsInterface: LayoutParagraphFragment
    }
};
export const NodeFragment = {
    __typename: true,
    id: true,
    title: true,
    on_NodePage: NodePageFragment
};
export const MenuItemFragment = {
    __typename: true,
    __scalar: true,
    attributes: {
        __scalar: true
    }
};

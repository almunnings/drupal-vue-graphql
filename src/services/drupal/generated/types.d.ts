declare const _default: {
    scalars: number[];
    types: {
        Address: {
            additionalName: number[];
            addressLine1: number[];
            addressLine2: number[];
            administrativeArea: number[];
            country: number[];
            dependentLocality: number[];
            familyName: number[];
            givenName: number[];
            langcode: number[];
            locality: number[];
            organization: number[];
            postalCode: number[];
            sortingCode: number[];
            __typename: number[];
        };
        AddressCountry: {
            code: number[];
            name: number[];
            __typename: number[];
        };
        BlockContent: {
            entity: number[];
            id: number[];
            render: number[];
            title: number[];
            __typename: number[];
        };
        BlockContentAnotherType: {
            body: number[];
            changed: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            reusable: number[];
            title: number[];
            __typename: number[];
        };
        BlockContentBasicBlock: {
            body: number[];
            changed: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            reusable: number[];
            title: number[];
            __typename: number[];
        };
        BlockContentInterface: {
            changed: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            reusable: number[];
            title: number[];
            on_BlockContentAnotherType: number[];
            on_BlockContentBasicBlock: number[];
            __typename: number[];
        };
        BlockContentUnion: {
            on_BlockContentAnotherType: number[];
            on_BlockContentBasicBlock: number[];
            on_BlockContentInterface: number[];
            on_MetaTagInterface: number[];
            __typename: number[];
        };
        BlockInterface: {
            id: number[];
            render: number[];
            title: number[];
            on_BlockContent: number[];
            on_BlockPlugin: number[];
            __typename: number[];
        };
        BlockPlugin: {
            id: number[];
            render: number[];
            title: number[];
            __typename: number[];
        };
        BlockUnion: {
            on_BlockContent: number[];
            on_BlockPlugin: number[];
            on_BlockInterface: number[];
            __typename: number[];
        };
        Boolean: {};
        DateRange: {
            end: number[];
            start: number[];
            __typename: number[];
        };
        DateTime: {
            offset: number[];
            time: number[];
            timestamp: number[];
            timezone: number[];
            __typename: number[];
        };
        Email: {};
        File: {
            description: number[];
            mime: number[];
            name: number[];
            size: number[];
            url: number[];
            __typename: number[];
        };
        Float: {};
        Html: {};
        ID: {};
        Image: {
            alt: number[];
            height: number[];
            mime: number[];
            size: number[];
            title: number[];
            url: number[];
            variations: (number | {
                styles: (string | number)[];
            })[];
            width: number[];
            __typename: number[];
        };
        ImageStyle: {
            id: number[];
            name: number[];
            __typename: number[];
        };
        ImageStyleAvailable: {};
        ImageStyleDerivative: {
            height: number[];
            name: number[];
            url: number[];
            width: number[];
            __typename: number[];
        };
        ImageStyleInterface: {
            id: number[];
            name: number[];
            on_ImageStyle: number[];
            __typename: number[];
        };
        ImageStyleUnion: {
            on_ImageStyle: number[];
            on_ImageStyleInterface: number[];
            __typename: number[];
        };
        Int: {};
        KeyValueInput: {
            key: number[];
            value: number[];
            __typename: number[];
        };
        Language: {
            direction: number[];
            id: number[];
            name: number[];
            __typename: number[];
        };
        Layout: {
            category: number[];
            defaultRegion: number[];
            id: number[];
            label: number[];
            regions: number[];
            __typename: number[];
        };
        LayoutParagraphs: {
            layout: number[];
            position: number[];
            __typename: number[];
        };
        LayoutParagraphsInterface: {
            composition: number[];
            on_ParagraphAccordion: number[];
            on_ParagraphBlock: number[];
            on_ParagraphCallToAction: number[];
            on_ParagraphMedia: number[];
            on_ParagraphQuote: number[];
            on_ParagraphSection: number[];
            on_ParagraphTable: number[];
            on_ParagraphText: number[];
            __typename: number[];
        };
        LayoutParagraphsPosition: {
            parentId: number[];
            region: number[];
            __typename: number[];
        };
        Link: {
            internal: number[];
            title: number[];
            url: number[];
            __typename: number[];
        };
        MediaAudio: {
            audio: number[];
            changed: number[];
            created: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            path: number[];
            status: number[];
            __typename: number[];
        };
        MediaDocument: {
            changed: number[];
            created: number[];
            document: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            path: number[];
            status: number[];
            __typename: number[];
        };
        MediaImage: {
            changed: number[];
            created: number[];
            id: number[];
            image: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            path: number[];
            status: number[];
            __typename: number[];
        };
        MediaInterface: {
            changed: number[];
            created: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            path: number[];
            status: number[];
            on_MediaAudio: number[];
            on_MediaDocument: number[];
            on_MediaImage: number[];
            on_MediaRemoteVideo: number[];
            on_MediaVideo: number[];
            __typename: number[];
        };
        MediaRemoteVideo: {
            changed: number[];
            created: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            path: number[];
            status: number[];
            url: number[];
            __typename: number[];
        };
        MediaUnion: {
            on_MediaAudio: number[];
            on_MediaDocument: number[];
            on_MediaImage: number[];
            on_MediaRemoteVideo: number[];
            on_MediaVideo: number[];
            on_MediaInterface: number[];
            on_MetaTagInterface: number[];
            __typename: number[];
        };
        MediaVideo: {
            changed: number[];
            created: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            path: number[];
            status: number[];
            video: number[];
            __typename: number[];
        };
        Menu: {
            id: number[];
            items: number[];
            name: number[];
            __typename: number[];
        };
        MenuAvailable: {};
        MenuInterface: {
            id: number[];
            items: number[];
            name: number[];
            on_Menu: number[];
            __typename: number[];
        };
        MenuItem: {
            attributes: number[];
            children: number[];
            description: number[];
            expanded: number[];
            id: number[];
            internal: number[];
            langcode: number[];
            route: number[];
            title: number[];
            url: number[];
            __typename: number[];
        };
        MenuItemAttributes: {
            class: number[];
            id: number[];
            target: number[];
            __typename: number[];
        };
        MenuUnion: {
            on_Menu: number[];
            on_MenuInterface: number[];
            __typename: number[];
        };
        MetaTag: {
            tag: number[];
            on_MetaTagLink: number[];
            on_MetaTagProperty: number[];
            on_MetaTagScript: number[];
            on_MetaTagValue: number[];
            __typename: number[];
        };
        MetaTagInterface: {
            metatag: number[];
            on_BlockContentAnotherType: number[];
            on_BlockContentBasicBlock: number[];
            on_MediaAudio: number[];
            on_MediaDocument: number[];
            on_MediaImage: number[];
            on_MediaRemoteVideo: number[];
            on_MediaVideo: number[];
            on_NodePage: number[];
            on_TermTag: number[];
            __typename: number[];
        };
        MetaTagLink: {
            attributes: number[];
            tag: number[];
            __typename: number[];
        };
        MetaTagLinkAttributes: {
            href: number[];
            hreflang: number[];
            media: number[];
            rel: number[];
            sizes: number[];
            type: number[];
            __typename: number[];
        };
        MetaTagProperty: {
            attributes: number[];
            tag: number[];
            __typename: number[];
        };
        MetaTagPropertyAttributes: {
            content: number[];
            property: number[];
            __typename: number[];
        };
        MetaTagScript: {
            attributes: number[];
            content: number[];
            tag: number[];
            __typename: number[];
        };
        MetaTagScriptAttributes: {
            integrity: number[];
            src: number[];
            type: number[];
            __typename: number[];
        };
        MetaTagUnion: {
            on_MetaTagLink: number[];
            on_MetaTagProperty: number[];
            on_MetaTagScript: number[];
            on_MetaTagValue: number[];
            on_MetaTag: number[];
            __typename: number[];
        };
        MetaTagValue: {
            attributes: number[];
            tag: number[];
            __typename: number[];
        };
        MetaTagValueAttributes: {
            content: number[];
            name: number[];
            __typename: number[];
        };
        Mutation: {
            _: number[];
            __typename: number[];
        };
        NodeInterface: {
            changed: number[];
            created: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            path: number[];
            promote: number[];
            status: number[];
            sticky: number[];
            title: number[];
            on_NodePage: number[];
            __typename: number[];
        };
        NodePage: {
            changed: number[];
            content: number[];
            created: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            path: number[];
            promote: number[];
            status: number[];
            sticky: number[];
            title: number[];
            __typename: number[];
        };
        NodeUnion: {
            on_NodePage: number[];
            on_MetaTagInterface: number[];
            on_NodeInterface: number[];
            __typename: number[];
        };
        ParagraphAccordion: {
            accordionTitle: number[];
            composition: number[];
            created: number[];
            id: number[];
            items: number[];
            langcode: number[];
            status: number[];
            __typename: number[];
        };
        ParagraphBlock: {
            block: number[];
            composition: number[];
            created: number[];
            id: number[];
            langcode: number[];
            status: number[];
            __typename: number[];
        };
        ParagraphCallToAction: {
            composition: number[];
            created: number[];
            id: number[];
            langcode: number[];
            link: number[];
            status: number[];
            text: number[];
            title: number[];
            __typename: number[];
        };
        ParagraphInterface: {
            created: number[];
            id: number[];
            langcode: number[];
            status: number[];
            on_ParagraphAccordion: number[];
            on_ParagraphBlock: number[];
            on_ParagraphCallToAction: number[];
            on_ParagraphMedia: number[];
            on_ParagraphQuote: number[];
            on_ParagraphSection: number[];
            on_ParagraphTable: number[];
            on_ParagraphText: number[];
            __typename: number[];
        };
        ParagraphMedia: {
            composition: number[];
            created: number[];
            description: number[];
            id: number[];
            langcode: number[];
            media: number[];
            status: number[];
            title: number[];
            __typename: number[];
        };
        ParagraphQuote: {
            citation: number[];
            composition: number[];
            created: number[];
            id: number[];
            langcode: number[];
            link: number[];
            quote: number[];
            status: number[];
            __typename: number[];
        };
        ParagraphSection: {
            composition: number[];
            created: number[];
            id: number[];
            langcode: number[];
            status: number[];
            __typename: number[];
        };
        ParagraphTable: {
            composition: number[];
            created: number[];
            id: number[];
            langcode: number[];
            status: number[];
            table: number[];
            title: number[];
            __typename: number[];
        };
        ParagraphText: {
            composition: number[];
            created: number[];
            id: number[];
            langcode: number[];
            status: number[];
            text: number[];
            __typename: number[];
        };
        ParagraphUnion: {
            on_ParagraphAccordion: number[];
            on_ParagraphBlock: number[];
            on_ParagraphCallToAction: number[];
            on_ParagraphMedia: number[];
            on_ParagraphQuote: number[];
            on_ParagraphSection: number[];
            on_ParagraphTable: number[];
            on_ParagraphText: number[];
            on_LayoutParagraphsInterface: number[];
            on_ParagraphInterface: number[];
            __typename: number[];
        };
        PhoneNumber: {};
        Query: {
            block: (number | {
                id: (string | number)[];
            })[];
            info: number[];
            menu: (number | {
                name: (string | number)[];
            })[];
            route: (number | {
                path: (string | number)[];
            })[];
            __typename: number[];
        };
        Route: {
            internal: number[];
            url: number[];
            on_RouteExternal: number[];
            on_RouteInternal: number[];
            on_RouteRedirect: number[];
            __typename: number[];
        };
        RouteEntityUnion: {
            on_NodePage: number[];
            on_MetaTagInterface: number[];
            on_NodeInterface: number[];
            __typename: number[];
        };
        RouteExternal: {
            internal: number[];
            url: number[];
            __typename: number[];
        };
        RouteInternal: {
            breadcrumbs: number[];
            entity: number[];
            internal: number[];
            url: number[];
            __typename: number[];
        };
        RouteRedirect: {
            internal: number[];
            redirect: number[];
            status: number[];
            url: number[];
            __typename: number[];
        };
        RouteUnion: {
            on_RouteExternal: number[];
            on_RouteInternal: number[];
            on_RouteRedirect: number[];
            on_Route: number[];
            __typename: number[];
        };
        SchemaInformation: {
            description: number[];
            home: number[];
            version: number[];
            __typename: number[];
        };
        SortDirection: {};
        String: {};
        Table: {
            caption: number[];
            format: number[];
            rows: number[];
            __typename: number[];
        };
        TableRow: {
            data: number[];
            weight: number[];
            __typename: number[];
        };
        TermInterface: {
            changed: number[];
            description: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            parent: number[];
            path: number[];
            status: number[];
            weight: number[];
            on_TermTag: number[];
            __typename: number[];
        };
        TermTag: {
            changed: number[];
            description: number[];
            id: number[];
            langcode: number[];
            metatag: number[];
            name: number[];
            parent: number[];
            path: number[];
            status: number[];
            weight: number[];
            __typename: number[];
        };
        TermUnion: {
            on_TermTag: number[];
            on_MetaTagInterface: number[];
            on_TermInterface: number[];
            __typename: number[];
        };
        Text: {
            format: number[];
            processed: number[];
            value: number[];
            __typename: number[];
        };
        TextSummary: {
            format: number[];
            processed: number[];
            summary: number[];
            value: number[];
            __typename: number[];
        };
        Time: {};
        TimeZone: {};
        Timestamp: {};
        UnsupportedType: {
            unsupported: number[];
            __typename: number[];
        };
        UntypedStructuredData: {};
        UtcOffset: {};
        View: {
            description: number[];
            display: number[];
            id: number[];
            label: number[];
            langcode: number[];
            pageInfo: number[];
            view: number[];
            __typename: number[];
        };
        ViewPageInfo: {
            offset: number[];
            page: number[];
            pageSize: number[];
            total: number[];
            __typename: number[];
        };
        ViewReference: {
            contextualFilter: number[];
            display: number[];
            pageSize: number[];
            query: number[];
            view: number[];
            __typename: number[];
        };
        ViewResultUnion: {
            on_UnsupportedType: number[];
            __typename: number[];
        };
        _: {};
    };
};
export default _default;

export type Scalars = {
    Attributes: any,
    Boolean: boolean,
    Cursor: any,
    Email: any,
    Float: number,
    Html: any,
    ID: string,
    Int: number,
    PhoneNumber: any,
    String: string,
    Time: any,
    TimeZone: any,
    Timestamp: any,
    UserRoles: any,
    UtcOffset: any,
    Violation: any,
}


/** Complex address data. */
export interface Address {
    additionalName?: Scalars['String']
    addressLine1?: Scalars['String']
    addressLine2?: Scalars['String']
    administrativeArea?: Scalars['String']
    countryCode?: Scalars['String']
    dependentLocality?: Scalars['String']
    familyName?: Scalars['String']
    givenName?: Scalars['String']
    langcode?: Scalars['String']
    locality?: Scalars['String']
    organization?: Scalars['String']
    postalCode?: Scalars['String']
    sortingCode?: Scalars['String']
    __typename: 'Address'
}


/** Block field information. */
export type Block = (BlockContent | BlockPlugin) & { __isUnion?: true }


/** Block field information. */
export interface BlockContent {
    entity?: TypeBlockContentUnion
    id: Scalars['ID']
    render?: Scalars['Html']
    title?: Scalars['String']
    __typename: 'BlockContent'
}


/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherType {
    /** Body */
    body?: TextSummary
    /** The time that the custom block was last edited. */
    changed: DateTime
    /** The custom block UUID. */
    id: Scalars['ID']
    /** The custom block language code. */
    langcode: Language
    /** A boolean indicating whether this block is reusable. */
    reusable: Scalars['Boolean']
    /** A brief description of your block. */
    title: Scalars['String']
    __typename: 'BlockContentAnotherType'
}


/** A basic block with a title and content. */
export interface BlockContentBasicBlock {
    /** Body */
    body?: TextSummary
    /** The time that the custom block was last edited. */
    changed: DateTime
    /** The custom block UUID. */
    id: Scalars['ID']
    /** The custom block language code. */
    langcode: Language
    /** A boolean indicating whether this block is reusable. */
    reusable: Scalars['Boolean']
    /** A brief description of your block. */
    title: Scalars['String']
    __typename: 'BlockContentBasicBlock'
}


/** Block field information. */
export interface BlockField {
    block?: Block
    configuration?: Scalars['Attributes']
    plugin_id?: Scalars['ID']
    __typename: 'BlockField'
}


/** Block field information. */
export interface BlockPlugin {
    id: Scalars['ID']
    render?: Scalars['Html']
    title?: Scalars['String']
    __typename: 'BlockPlugin'
}


/** Block types that can exist in the system. */
export type BlockUnion = (BlockContent | BlockPlugin) & { __isUnion?: true }


/** A paginated set of results. */
export type Connection = (NodePageConnection) & { __isUnion?: true }


/** A DateTime object. */
export interface DateTime {
    offset: Scalars['UtcOffset']
    time: Scalars['Time']
    timestamp: Scalars['Timestamp']
    timezone: Scalars['TimeZone']
    __typename: 'DateTime'
}


/**
 * An edge in a connection.
 * Provides the cursor to fetch data based on the position of the associated
 * node. Specific edge implementations may provide more information about the
 * relationship they represent.
 */
export type Edge = (NodePageEdge) & { __isUnion?: true }


/** A file object to represent an managed file. */
export interface File {
    description?: Scalars['String']
    mime?: Scalars['String']
    name?: Scalars['String']
    size?: Scalars['Int']
    url?: Scalars['String']
    __typename: 'File'
}


/** A image object to represent an managed file. */
export interface Image {
    alt?: Scalars['String']
    height: Scalars['Int']
    /** Fetch an image style. */
    style?: ImageStyleDerivative
    title?: Scalars['String']
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'Image'
}


/** Entity type image_style. */
export interface ImageStyle {
    name?: Scalars['String']
    uuid?: Scalars['ID']
    __typename: 'ImageStyle'
}


/** List of image styles available to use. */
export type ImageStyleAvailable = 'UNDEFINED'


/** ImageStyle derivative for an Image. */
export interface ImageStyleDerivative {
    height?: Scalars['Int']
    style?: ImageStyle
    url?: Scalars['String']
    width?: Scalars['Int']
    __typename: 'ImageStyleDerivative'
}


/** A langauge definition provided by the CMS. */
export interface Language {
    direction?: Scalars['String']
    id?: Scalars['ID']
    name?: Scalars['String']
    __typename: 'Language'
}


/** A layout defined by the CMS. */
export interface Layout {
    /** Human readable category of the layout definition. */
    category: Scalars['String']
    /** A default region as fallback for convenience. */
    defaultRegion: Scalars['String']
    /** Machine readable name of the layout definition. */
    id: Scalars['ID']
    /** Human readable name of the layout definition. */
    label: Scalars['String']
    /** Regions represent where a User can place content within the CMS. */
    regions: Scalars['String'][]
    __typename: 'Layout'
}


/** If this component has been designed by a User extra information will be available here. */
export interface LayoutParagraphs {
    layout?: Layout
    position?: LayoutParagraphsPosition
    __typename: 'LayoutParagraphs'
}


/** This content has been arranged by a User using a layout builder. */
export type LayoutParagraphsInterface = (ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/** This component positionally belongs to another component's layout. */
export interface LayoutParagraphsPosition {
    /** Parent component this component belongs to. */
    parentId?: Scalars['ID']
    /** There this component is suggested to live within the parent component's regions. */
    region?: Scalars['String']
    __typename: 'LayoutParagraphsPosition'
}


/** This component positionally belongs to another component's layout. */
export interface LayoutPosition {
    /** Parent component this component belongs to. */
    parentId?: Scalars['ID']
    /** There this component is suggested to live within the parent component's regions. */
    region?: Scalars['String']
    __typename: 'LayoutPosition'
}

export interface Link {
    route?: RouteUnion
    title?: Scalars['String']
    url?: Scalars['String']
    __typename: 'Link'
}


/** A locally hosted audio file. */
export interface MediaAudio {
    /** Audio file */
    audio: File
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Name */
    name: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    __typename: 'MediaAudio'
}


/** An uploaded file or document, such as a PDF. */
export interface MediaDocument {
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** Document */
    document: File
    /** UUID */
    id: Scalars['ID']
    /** Name */
    name: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    __typename: 'MediaDocument'
}


/** Use local images for reusable media. */
export interface MediaImage {
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Image */
    image: Image
    /** Name */
    name: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    __typename: 'MediaImage'
}


/** A remotely hosted video from YouTube or Vimeo. */
export interface MediaRemoteVideo {
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Name */
    name: Scalars['String']
    /** Video URL */
    oembed: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    __typename: 'MediaRemoteVideo'
}


/** A locally hosted video file. */
export interface MediaVideo {
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Name */
    name: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    /** Video file */
    video: File
    __typename: 'MediaVideo'
}


/** Entity type menu. */
export interface Menu {
    items?: MenuItem[]
    name?: Scalars['String']
    __typename: 'Menu'
}


/** List of menus available to load. */
export type MenuAvailable = 'FOOTER' | 'MAIN'


/** A menu item defined in the CMS. */
export interface MenuItem {
    children?: MenuItem[]
    description?: Scalars['String']
    expanded: Scalars['Boolean']
    route: RouteUnion
    title?: Scalars['String']
    __typename: 'MenuItem'
}


/** Meta elements are tags used in HTML and XHTML documents to provide structured metadata about a Web page. */
export type MetaTag = (MetaTagLink | MetaTagProperty | MetaTagValue) & { __isUnion?: true }

export interface MetaTagLink {
    attributes: MetaTagLinkAttributes
    tag: Scalars['String']
    __typename: 'MetaTagLink'
}

export interface MetaTagLinkAttributes {
    href?: Scalars['String']
    rel?: Scalars['String']
    __typename: 'MetaTagLinkAttributes'
}

export interface MetaTagProperty {
    attributes: MetaTagPropertyAttributes
    tag: Scalars['String']
    __typename: 'MetaTagProperty'
}

export interface MetaTagPropertyAttributes {
    content?: Scalars['String']
    property?: Scalars['String']
    __typename: 'MetaTagPropertyAttributes'
}

export type MetaTagUnion = (MetaTagLink | MetaTagProperty | MetaTagValue) & { __isUnion?: true }

export interface MetaTagValue {
    attributes: MetaTagValueAttributes
    tag: Scalars['String']
    __typename: 'MetaTagValue'
}

export interface MetaTagValueAttributes {
    content?: Scalars['String']
    name?: Scalars['String']
    __typename: 'MetaTagValueAttributes'
}


/** A concrete fetchable type that is addressable by an id. */
export type Node = (BlockContent | BlockContentAnotherType | BlockContentBasicBlock | BlockPlugin | Layout | MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo | NodePage | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText | User) & { __isUnion?: true }


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePage {
    /** The username of the content author. */
    author: User
    /** The time that the node was last edited. */
    changed: DateTime
    /** Content */
    content?: TypeParagraphUnion[]
    /** The time that the node was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Language */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** URL alias */
    path: Scalars['String']
    /** Promoted to front page */
    promote: Scalars['Boolean']
    /** Published */
    status: Scalars['Boolean']
    /** Sticky at top of lists */
    sticky: Scalars['Boolean']
    /** Title */
    title: Scalars['String']
    __typename: 'NodePage'
}


/** A paginated set of results for NodePage. */
export interface NodePageConnection {
    edges: NodePageEdge[]
    nodes: NodePage[]
    pageInfo: PageInfo
    __typename: 'NodePageConnection'
}


/** Edge for NodePage. */
export interface NodePageEdge {
    cursor: Scalars['Cursor']
    node: NodePage
    __typename: 'NodePageEdge'
}


/** The set of valid sort keys for the NodePage query. */
export type NodePageSortKeys = 'CREATED_AT'


/** Information about the page in a connection. */
export interface PageInfo {
    /** The cursor for the last element in this page. */
    endCursor: Scalars['Cursor']
    /** Whether there are more pages in this connection. */
    hasNextPage: Scalars['Boolean']
    /** Whether there are previous pages in this connection. */
    hasPreviousPage: Scalars['Boolean']
    /** The cursor for the first element in this page. */
    startCursor: Scalars['Cursor']
    __typename: 'PageInfo'
}


/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlock {
    /** Block */
    block?: BlockUnion
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** Feature */
    feature?: Scalars['String']
    /** UUID */
    id: Scalars['ID']
    __typename: 'ParagraphBlock'
}


/** Add a title, text content with formatting and link. */
export interface ParagraphCallToAction {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** UUID */
    id: Scalars['ID']
    /** Link */
    link?: Link
    /** Text */
    text?: Text
    /** Title */
    title?: Scalars['String']
    __typename: 'ParagraphCallToAction'
}


/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMedia {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** Description */
    description?: Text
    /** UUID */
    id: Scalars['ID']
    /** Media */
    media: TypeMediaUnion
    /** Title */
    title?: Scalars['String']
    __typename: 'ParagraphMedia'
}


/** Add a quote. Add citation and citation link */
export interface ParagraphQuote {
    /** Give credit for the quote. */
    citation?: Scalars['String']
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** UUID */
    id: Scalars['ID']
    /** Enter an optional link for the citation. */
    link?: Link
    /** Quote */
    quote: Text
    __typename: 'ParagraphQuote'
}


/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSection {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** UUID */
    id: Scalars['ID']
    __typename: 'ParagraphSection'
}


/** Create a table with your own columns and rows. */
export interface ParagraphTable {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** UUID */
    id: Scalars['ID']
    /** Table */
    table: Table
    /** Add a title to your block */
    title?: Scalars['String']
    __typename: 'ParagraphTable'
}


/** Text based content with formatting. */
export interface ParagraphText {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** UUID */
    id: Scalars['ID']
    /** Text */
    text: Text
    __typename: 'ParagraphText'
}


/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export interface Query {
    /** Load a Block plugin. */
    block?: BlockUnion
    /** Schema generator version. */
    info: SchemaInformation
    /** Load a Route by path. */
    menu?: Menu
    /** Fetch data for a specific NodePage */
    nodePage?: NodePage
    /** List of all NodePage on the platform. Results are access controlled. */
    nodePages: NodePageConnection
    /** Load a Route by path. */
    route?: RouteUnion
    /** Get information about the currently authenticated user. NULL if not logged in. */
    viewer?: User
    __typename: 'Query'
}


/** The base GraphQL Response class */
export interface Response {
    errors?: (Scalars['Violation'] | undefined)[]
    __typename: string
}


/** Routes represent incoming requests that resolve to content. */
export type Route = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** A list of possible entites that can be returned by URL. */
export type RouteEntityUnion = (NodePage) & { __isUnion?: true }


/** Route outside of this website. */
export interface RouteExternal {
    internal: Scalars['Boolean']
    url: Scalars['String']
    __typename: 'RouteExternal'
}


/** Route within this website. */
export interface RouteInternal {
    /** Content assigned to this route. */
    entity?: RouteEntityUnion
    internal: Scalars['Boolean']
    url: Scalars['String']
    __typename: 'RouteInternal'
}


/** Redirect to another URL with status. */
export interface RouteRedirect {
    internal: Scalars['Boolean']
    /** Utility prop. Always true for redirects. */
    redirect: Scalars['Boolean']
    /** Suggested status for redirect. Eg 301. */
    status: Scalars['Int']
    url: Scalars['String']
    __typename: 'RouteRedirect'
}


/** Route types that can exist in the system. */
export type RouteUnion = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** Schema generator version. */
export interface SchemaInformation {
    /** Description of the API as set by an administrator. */
    description: Scalars['String']
    __typename: 'SchemaInformation'
}

export interface Table {
    caption?: Scalars['String']
    /** A text format associated with the row data. */
    format?: Scalars['String']
    rows?: (TableRow | undefined)[]
    __typename: 'Table'
}

export interface TableRow {
    data?: (Scalars['String'] | undefined)[]
    weight?: Scalars['Int']
    __typename: 'TableRow'
}


/** A processed text format defined by the CMS. */
export interface Text {
    format?: Scalars['String']
    processed?: Scalars['Html']
    value?: Scalars['String']
    __typename: 'Text'
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummary {
    format?: Scalars['String']
    processed?: Scalars['Html']
    summary?: Scalars['Html']
    value?: Scalars['String']
    __typename: 'TextSummary'
}


/** Entity type block_content. */
export type TypeBlockContentInterface = (BlockContentAnotherType | BlockContentBasicBlock) & { __isUnion?: true }

export type TypeBlockContentUnion = (BlockContentAnotherType | BlockContentBasicBlock) & { __isUnion?: true }


/** Entity type media. */
export type TypeMediaInterface = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & { __isUnion?: true }

export type TypeMediaUnion = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & { __isUnion?: true }


/** Entity type node. */
export type TypeNodeInterface = (NodePage) & { __isUnion?: true }


/** Entity type paragraph. */
export type TypeParagraphInterface = (ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }

export type TypeParagraphUnion = (ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/** Entity type taxonomy_term. */
export interface TypeTermInterface {
    /** The time that the term was last edited. */
    changed?: DateTime
    /** Description */
    description?: Text
    /** The term UUID. */
    id?: Scalars['ID']
    /** The term language code. */
    langcode?: Language
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path?: Scalars['String']
    /** Published */
    status?: Scalars['Boolean']
    __typename: string
}


/** Entity type user. */
export type TypeUserInterface = (User) & { __isUnion?: true }


/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedType {
    /** Unsupported type, always TRUE. */
    unsupported?: Scalars['Boolean']
    __typename: 'UnsupportedType'
}


/** Entity type user. */
export interface User {
    /** The time that the user was last edited. */
    changed: DateTime
    /** The time that the user was created. */
    created: DateTime
    /** The user UUID. */
    id: Scalars['ID']
    /** The email of this user. */
    mail: Scalars['Email']
    /** The name of this user. */
    name: Scalars['String']
    /** The roles the user has. */
    roles: Scalars['UserRoles'][]
    /** Whether the user is active or blocked. */
    status: UserStatus
    __typename: 'User'
}


/** Whether the user is active or blocked. */
export type UserStatus = 'ACTIVE' | 'BLOCKED'


/** Complex address data. */
export interface AddressGenqlSelection{
    additionalName?: boolean | number
    addressLine1?: boolean | number
    addressLine2?: boolean | number
    administrativeArea?: boolean | number
    countryCode?: boolean | number
    dependentLocality?: boolean | number
    familyName?: boolean | number
    givenName?: boolean | number
    langcode?: boolean | number
    locality?: boolean | number
    organization?: boolean | number
    postalCode?: boolean | number
    sortingCode?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block field information. */
export interface BlockGenqlSelection{
    id?: boolean | number
    render?: boolean | number
    title?: boolean | number
    on_BlockContent?: BlockContentGenqlSelection
    on_BlockPlugin?: BlockPluginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block field information. */
export interface BlockContentGenqlSelection{
    entity?: TypeBlockContentUnionGenqlSelection
    id?: boolean | number
    render?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherTypeGenqlSelection{
    /** Body */
    body?: TextSummaryGenqlSelection
    /** The time that the custom block was last edited. */
    changed?: DateTimeGenqlSelection
    /** The custom block UUID. */
    id?: boolean | number
    /** The custom block language code. */
    langcode?: LanguageGenqlSelection
    /** A boolean indicating whether this block is reusable. */
    reusable?: boolean | number
    /** A brief description of your block. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A basic block with a title and content. */
export interface BlockContentBasicBlockGenqlSelection{
    /** Body */
    body?: TextSummaryGenqlSelection
    /** The time that the custom block was last edited. */
    changed?: DateTimeGenqlSelection
    /** The custom block UUID. */
    id?: boolean | number
    /** The custom block language code. */
    langcode?: LanguageGenqlSelection
    /** A boolean indicating whether this block is reusable. */
    reusable?: boolean | number
    /** A brief description of your block. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block field information. */
export interface BlockFieldGenqlSelection{
    block?: BlockGenqlSelection
    configuration?: boolean | number
    plugin_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block field information. */
export interface BlockPluginGenqlSelection{
    id?: boolean | number
    render?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block types that can exist in the system. */
export interface BlockUnionGenqlSelection{
    on_BlockContent?:BlockContentGenqlSelection,
    on_BlockPlugin?:BlockPluginGenqlSelection,
    on_Block?: BlockGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}


/** A paginated set of results. */
export interface ConnectionGenqlSelection{
    /** The edges of this connection. */
    edges?: EdgeGenqlSelection
    /** The nodes of the edges of this connection. */
    nodes?: NodeGenqlSelection
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    on_NodePageConnection?: NodePageConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A DateTime object. */
export interface DateTimeGenqlSelection{
    offset?: boolean | number
    time?: boolean | number
    timestamp?: boolean | number
    timezone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An edge in a connection.
 * Provides the cursor to fetch data based on the position of the associated
 * node. Specific edge implementations may provide more information about the
 * relationship they represent.
 */
export interface EdgeGenqlSelection{
    cursor?: boolean | number
    node?: NodeGenqlSelection
    on_NodePageEdge?: NodePageEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A file object to represent an managed file. */
export interface FileGenqlSelection{
    description?: boolean | number
    mime?: boolean | number
    name?: boolean | number
    size?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A image object to represent an managed file. */
export interface ImageGenqlSelection{
    alt?: boolean | number
    height?: boolean | number
    /** Fetch an image style. */
    style?: (ImageStyleDerivativeGenqlSelection & { __args?: {
    /** Image styles available via the CMS. */
    name?: (ImageStyleAvailable | null)} })
    title?: boolean | number
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type image_style. */
export interface ImageStyleGenqlSelection{
    name?: boolean | number
    uuid?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** ImageStyle derivative for an Image. */
export interface ImageStyleDerivativeGenqlSelection{
    height?: boolean | number
    style?: ImageStyleGenqlSelection
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A langauge definition provided by the CMS. */
export interface LanguageGenqlSelection{
    direction?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A layout defined by the CMS. */
export interface LayoutGenqlSelection{
    /** Human readable category of the layout definition. */
    category?: boolean | number
    /** A default region as fallback for convenience. */
    defaultRegion?: boolean | number
    /** Machine readable name of the layout definition. */
    id?: boolean | number
    /** Human readable name of the layout definition. */
    label?: boolean | number
    /** Regions represent where a User can place content within the CMS. */
    regions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** If this component has been designed by a User extra information will be available here. */
export interface LayoutParagraphsGenqlSelection{
    layout?: LayoutGenqlSelection
    position?: LayoutParagraphsPositionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** This content has been arranged by a User using a layout builder. */
export interface LayoutParagraphsInterfaceGenqlSelection{
    composition?: LayoutParagraphsGenqlSelection
    on_ParagraphBlock?: ParagraphBlockGenqlSelection
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection
    on_ParagraphMedia?: ParagraphMediaGenqlSelection
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection
    on_ParagraphSection?: ParagraphSectionGenqlSelection
    on_ParagraphTable?: ParagraphTableGenqlSelection
    on_ParagraphText?: ParagraphTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** This component positionally belongs to another component's layout. */
export interface LayoutParagraphsPositionGenqlSelection{
    /** Parent component this component belongs to. */
    parentId?: boolean | number
    /** There this component is suggested to live within the parent component's regions. */
    region?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** This component positionally belongs to another component's layout. */
export interface LayoutPositionGenqlSelection{
    /** Parent component this component belongs to. */
    parentId?: boolean | number
    /** There this component is suggested to live within the parent component's regions. */
    region?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LinkGenqlSelection{
    route?: RouteUnionGenqlSelection
    title?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A locally hosted audio file. */
export interface MediaAudioGenqlSelection{
    /** Audio file */
    audio?: FileGenqlSelection
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An uploaded file or document, such as a PDF. */
export interface MediaDocumentGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** Document */
    document?: FileGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Use local images for reusable media. */
export interface MediaImageGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Image */
    image?: ImageGenqlSelection
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A remotely hosted video from YouTube or Vimeo. */
export interface MediaRemoteVideoGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Video URL */
    oembed?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A locally hosted video file. */
export interface MediaVideoGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    /** Video file */
    video?: FileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type menu. */
export interface MenuGenqlSelection{
    items?: MenuItemGenqlSelection
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A menu item defined in the CMS. */
export interface MenuItemGenqlSelection{
    children?: MenuItemGenqlSelection
    description?: boolean | number
    expanded?: boolean | number
    route?: RouteUnionGenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Meta elements are tags used in HTML and XHTML documents to provide structured metadata about a Web page. */
export interface MetaTagGenqlSelection{
    tag?: boolean | number
    on_MetaTagLink?: MetaTagLinkGenqlSelection
    on_MetaTagProperty?: MetaTagPropertyGenqlSelection
    on_MetaTagValue?: MetaTagValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaTagLinkGenqlSelection{
    attributes?: MetaTagLinkAttributesGenqlSelection
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaTagLinkAttributesGenqlSelection{
    href?: boolean | number
    rel?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaTagPropertyGenqlSelection{
    attributes?: MetaTagPropertyAttributesGenqlSelection
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaTagPropertyAttributesGenqlSelection{
    content?: boolean | number
    property?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaTagUnionGenqlSelection{
    on_MetaTagLink?:MetaTagLinkGenqlSelection,
    on_MetaTagProperty?:MetaTagPropertyGenqlSelection,
    on_MetaTagValue?:MetaTagValueGenqlSelection,
    on_MetaTag?: MetaTagGenqlSelection,
    __typename?: boolean | number
}

export interface MetaTagValueGenqlSelection{
    attributes?: MetaTagValueAttributesGenqlSelection
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MetaTagValueAttributesGenqlSelection{
    content?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A concrete fetchable type that is addressable by an id. */
export interface NodeGenqlSelection{
    id?: boolean | number
    on_BlockContent?: BlockContentGenqlSelection
    on_BlockContentAnotherType?: BlockContentAnotherTypeGenqlSelection
    on_BlockContentBasicBlock?: BlockContentBasicBlockGenqlSelection
    on_BlockPlugin?: BlockPluginGenqlSelection
    on_Layout?: LayoutGenqlSelection
    on_MediaAudio?: MediaAudioGenqlSelection
    on_MediaDocument?: MediaDocumentGenqlSelection
    on_MediaImage?: MediaImageGenqlSelection
    on_MediaRemoteVideo?: MediaRemoteVideoGenqlSelection
    on_MediaVideo?: MediaVideoGenqlSelection
    on_NodePage?: NodePageGenqlSelection
    on_ParagraphBlock?: ParagraphBlockGenqlSelection
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection
    on_ParagraphMedia?: ParagraphMediaGenqlSelection
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection
    on_ParagraphSection?: ParagraphSectionGenqlSelection
    on_ParagraphTable?: ParagraphTableGenqlSelection
    on_ParagraphText?: ParagraphTextGenqlSelection
    on_User?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePageGenqlSelection{
    /** The username of the content author. */
    author?: UserGenqlSelection
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** Content */
    content?: TypeParagraphUnionGenqlSelection
    /** The time that the node was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** URL alias */
    path?: boolean | number
    /** Promoted to front page */
    promote?: boolean | number
    /** Published */
    status?: boolean | number
    /** Sticky at top of lists */
    sticky?: boolean | number
    /** Title */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A paginated set of results for NodePage. */
export interface NodePageConnectionGenqlSelection{
    edges?: NodePageEdgeGenqlSelection
    nodes?: NodePageGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge for NodePage. */
export interface NodePageEdgeGenqlSelection{
    cursor?: boolean | number
    node?: NodePageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about the page in a connection. */
export interface PageInfoGenqlSelection{
    /** The cursor for the last element in this page. */
    endCursor?: boolean | number
    /** Whether there are more pages in this connection. */
    hasNextPage?: boolean | number
    /** Whether there are previous pages in this connection. */
    hasPreviousPage?: boolean | number
    /** The cursor for the first element in this page. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlockGenqlSelection{
    /** Block */
    block?: BlockUnionGenqlSelection
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** Feature */
    feature?: boolean | number
    /** UUID */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Add a title, text content with formatting and link. */
export interface ParagraphCallToActionGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Link */
    link?: LinkGenqlSelection
    /** Text */
    text?: TextGenqlSelection
    /** Title */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMediaGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** Description */
    description?: TextGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Media */
    media?: TypeMediaUnionGenqlSelection
    /** Title */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Add a quote. Add citation and citation link */
export interface ParagraphQuoteGenqlSelection{
    /** Give credit for the quote. */
    citation?: boolean | number
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Enter an optional link for the citation. */
    link?: LinkGenqlSelection
    /** Quote */
    quote?: TextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSectionGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** UUID */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Create a table with your own columns and rows. */
export interface ParagraphTableGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Table */
    table?: TableGenqlSelection
    /** Add a title to your block */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Text based content with formatting. */
export interface ParagraphTextGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Text */
    text?: TextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export interface QueryGenqlSelection{
    /** Load a Block plugin. */
    block?: (BlockUnionGenqlSelection & { __args: {
    /** Block plugin name. Eg page_title_block, block_content:uuid */
    block_plugin_id: Scalars['String']} })
    /** Schema generator version. */
    info?: SchemaInformationGenqlSelection
    /** Load a Route by path. */
    menu?: (MenuGenqlSelection & { __args: {
    /** Internal menu name. Eg main */
    name: MenuAvailable} })
    /** Fetch data for a specific NodePage */
    nodePage?: (NodePageGenqlSelection & { __args: {
    /** The id of the NodePage to load. */
    id: Scalars['ID']} })
    /** List of all NodePage on the platform. Results are access controlled. */
    nodePages?: (NodePageConnectionGenqlSelection & { __args?: {
    /** Returns the elements that come after the specified cursor. */
    after?: (Scalars['Cursor'] | null), 
    /** Returns the elements that come before the specified cursor. */
    before?: (Scalars['Cursor'] | null), 
    /** Returns up to the first n elements from the list. */
    first?: (Scalars['Int'] | null), 
    /** Returns up to the last n elements from the list. */
    last?: (Scalars['Int'] | null), 
    /** Reverse the order of the underlying list. */
    reverse?: (Scalars['Boolean'] | null), 
    /** Sort the underlying list by the given key. */
    sortKey?: (NodePageSortKeys | null)} })
    /** Load a Route by path. */
    route?: (RouteUnionGenqlSelection & { __args: {
    /** Internal path to load. Eg /about */
    path: Scalars['String']} })
    /** Get information about the currently authenticated user. NULL if not logged in. */
    viewer?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The base GraphQL Response class */
export interface ResponseGenqlSelection{
    errors?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Routes represent incoming requests that resolve to content. */
export interface RouteGenqlSelection{
    internal?: boolean | number
    url?: boolean | number
    on_RouteExternal?: RouteExternalGenqlSelection
    on_RouteInternal?: RouteInternalGenqlSelection
    on_RouteRedirect?: RouteRedirectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A list of possible entites that can be returned by URL. */
export interface RouteEntityUnionGenqlSelection{
    on_NodePage?:NodePageGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_TypeNodeInterface?: TypeNodeInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Route outside of this website. */
export interface RouteExternalGenqlSelection{
    internal?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Route within this website. */
export interface RouteInternalGenqlSelection{
    /** Content assigned to this route. */
    entity?: RouteEntityUnionGenqlSelection
    internal?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Redirect to another URL with status. */
export interface RouteRedirectGenqlSelection{
    internal?: boolean | number
    /** Utility prop. Always true for redirects. */
    redirect?: boolean | number
    /** Suggested status for redirect. Eg 301. */
    status?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Route types that can exist in the system. */
export interface RouteUnionGenqlSelection{
    on_RouteExternal?:RouteExternalGenqlSelection,
    on_RouteInternal?:RouteInternalGenqlSelection,
    on_RouteRedirect?:RouteRedirectGenqlSelection,
    on_Route?: RouteGenqlSelection,
    __typename?: boolean | number
}


/** Schema generator version. */
export interface SchemaInformationGenqlSelection{
    /** Description of the API as set by an administrator. */
    description?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TableGenqlSelection{
    caption?: boolean | number
    /** A text format associated with the row data. */
    format?: boolean | number
    rows?: TableRowGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TableRowGenqlSelection{
    data?: boolean | number
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A processed text format defined by the CMS. */
export interface TextGenqlSelection{
    format?: boolean | number
    processed?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummaryGenqlSelection{
    format?: boolean | number
    processed?: boolean | number
    summary?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type block_content. */
export interface TypeBlockContentInterfaceGenqlSelection{
    /** The time that the custom block was last edited. */
    changed?: DateTimeGenqlSelection
    /** The custom block UUID. */
    id?: boolean | number
    /** The custom block language code. */
    langcode?: LanguageGenqlSelection
    /** A boolean indicating whether this block is reusable. */
    reusable?: boolean | number
    /** A brief description of your block. */
    title?: boolean | number
    on_BlockContentAnotherType?: BlockContentAnotherTypeGenqlSelection
    on_BlockContentBasicBlock?: BlockContentBasicBlockGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TypeBlockContentUnionGenqlSelection{
    on_BlockContentAnotherType?:BlockContentAnotherTypeGenqlSelection,
    on_BlockContentBasicBlock?:BlockContentBasicBlockGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_TypeBlockContentInterface?: TypeBlockContentInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Entity type media. */
export interface TypeMediaInterfaceGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Name */
    name?: boolean | number
    /** Published */
    status?: boolean | number
    on_MediaAudio?: MediaAudioGenqlSelection
    on_MediaDocument?: MediaDocumentGenqlSelection
    on_MediaImage?: MediaImageGenqlSelection
    on_MediaRemoteVideo?: MediaRemoteVideoGenqlSelection
    on_MediaVideo?: MediaVideoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TypeMediaUnionGenqlSelection{
    on_MediaAudio?:MediaAudioGenqlSelection,
    on_MediaDocument?:MediaDocumentGenqlSelection,
    on_MediaImage?:MediaImageGenqlSelection,
    on_MediaRemoteVideo?:MediaRemoteVideoGenqlSelection,
    on_MediaVideo?:MediaVideoGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_TypeMediaInterface?: TypeMediaInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Entity type node. */
export interface TypeNodeInterfaceGenqlSelection{
    /** The username of the content author. */
    author?: UserGenqlSelection
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time that the node was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** URL alias */
    path?: boolean | number
    /** Promoted to front page */
    promote?: boolean | number
    /** Published */
    status?: boolean | number
    /** Sticky at top of lists */
    sticky?: boolean | number
    /** Title */
    title?: boolean | number
    on_NodePage?: NodePageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type paragraph. */
export interface TypeParagraphInterfaceGenqlSelection{
    /** UUID */
    id?: boolean | number
    on_ParagraphBlock?: ParagraphBlockGenqlSelection
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection
    on_ParagraphMedia?: ParagraphMediaGenqlSelection
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection
    on_ParagraphSection?: ParagraphSectionGenqlSelection
    on_ParagraphTable?: ParagraphTableGenqlSelection
    on_ParagraphText?: ParagraphTextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TypeParagraphUnionGenqlSelection{
    on_ParagraphBlock?:ParagraphBlockGenqlSelection,
    on_ParagraphCallToAction?:ParagraphCallToActionGenqlSelection,
    on_ParagraphMedia?:ParagraphMediaGenqlSelection,
    on_ParagraphQuote?:ParagraphQuoteGenqlSelection,
    on_ParagraphSection?:ParagraphSectionGenqlSelection,
    on_ParagraphTable?:ParagraphTableGenqlSelection,
    on_ParagraphText?:ParagraphTextGenqlSelection,
    on_LayoutParagraphsInterface?: LayoutParagraphsInterfaceGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_TypeParagraphInterface?: TypeParagraphInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Entity type taxonomy_term. */
export interface TypeTermInterfaceGenqlSelection{
    /** The time that the term was last edited. */
    changed?: DateTimeGenqlSelection
    /** Description */
    description?: TextGenqlSelection
    /** The term UUID. */
    id?: boolean | number
    /** The term language code. */
    langcode?: LanguageGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
    /** Published */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type user. */
export interface TypeUserInterfaceGenqlSelection{
    /** The time that the user was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time that the user was created. */
    created?: DateTimeGenqlSelection
    /** The user UUID. */
    id?: boolean | number
    /** The email of this user. */
    mail?: boolean | number
    /** The name of this user. */
    name?: boolean | number
    /** The roles the user has. */
    roles?: boolean | number
    /** Whether the user is active or blocked. */
    status?: boolean | number
    on_User?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedTypeGenqlSelection{
    /** Unsupported type, always TRUE. */
    unsupported?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type user. */
export interface UserGenqlSelection{
    /** The time that the user was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time that the user was created. */
    created?: DateTimeGenqlSelection
    /** The user UUID. */
    id?: boolean | number
    /** The email of this user. */
    mail?: boolean | number
    /** The name of this user. */
    name?: boolean | number
    /** The roles the user has. */
    roles?: boolean | number
    /** Whether the user is active or blocked. */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Address_possibleTypes: string[] = ['Address']
    export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
      return Address_possibleTypes.includes(obj.__typename)
    }
    


    const Block_possibleTypes: string[] = ['BlockContent','BlockPlugin']
    export const isBlock = (obj?: { __typename?: any } | null): obj is Block => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlock"')
      return Block_possibleTypes.includes(obj.__typename)
    }
    


    const BlockContent_possibleTypes: string[] = ['BlockContent']
    export const isBlockContent = (obj?: { __typename?: any } | null): obj is BlockContent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockContent"')
      return BlockContent_possibleTypes.includes(obj.__typename)
    }
    


    const BlockContentAnotherType_possibleTypes: string[] = ['BlockContentAnotherType']
    export const isBlockContentAnotherType = (obj?: { __typename?: any } | null): obj is BlockContentAnotherType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockContentAnotherType"')
      return BlockContentAnotherType_possibleTypes.includes(obj.__typename)
    }
    


    const BlockContentBasicBlock_possibleTypes: string[] = ['BlockContentBasicBlock']
    export const isBlockContentBasicBlock = (obj?: { __typename?: any } | null): obj is BlockContentBasicBlock => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockContentBasicBlock"')
      return BlockContentBasicBlock_possibleTypes.includes(obj.__typename)
    }
    


    const BlockField_possibleTypes: string[] = ['BlockField']
    export const isBlockField = (obj?: { __typename?: any } | null): obj is BlockField => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockField"')
      return BlockField_possibleTypes.includes(obj.__typename)
    }
    


    const BlockPlugin_possibleTypes: string[] = ['BlockPlugin']
    export const isBlockPlugin = (obj?: { __typename?: any } | null): obj is BlockPlugin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockPlugin"')
      return BlockPlugin_possibleTypes.includes(obj.__typename)
    }
    


    const BlockUnion_possibleTypes: string[] = ['BlockContent','BlockPlugin']
    export const isBlockUnion = (obj?: { __typename?: any } | null): obj is BlockUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockUnion"')
      return BlockUnion_possibleTypes.includes(obj.__typename)
    }
    


    const Connection_possibleTypes: string[] = ['NodePageConnection']
    export const isConnection = (obj?: { __typename?: any } | null): obj is Connection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnection"')
      return Connection_possibleTypes.includes(obj.__typename)
    }
    


    const DateTime_possibleTypes: string[] = ['DateTime']
    export const isDateTime = (obj?: { __typename?: any } | null): obj is DateTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateTime"')
      return DateTime_possibleTypes.includes(obj.__typename)
    }
    


    const Edge_possibleTypes: string[] = ['NodePageEdge']
    export const isEdge = (obj?: { __typename?: any } | null): obj is Edge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEdge"')
      return Edge_possibleTypes.includes(obj.__typename)
    }
    


    const File_possibleTypes: string[] = ['File']
    export const isFile = (obj?: { __typename?: any } | null): obj is File => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFile"')
      return File_possibleTypes.includes(obj.__typename)
    }
    


    const Image_possibleTypes: string[] = ['Image']
    export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
      return Image_possibleTypes.includes(obj.__typename)
    }
    


    const ImageStyle_possibleTypes: string[] = ['ImageStyle']
    export const isImageStyle = (obj?: { __typename?: any } | null): obj is ImageStyle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageStyle"')
      return ImageStyle_possibleTypes.includes(obj.__typename)
    }
    


    const ImageStyleDerivative_possibleTypes: string[] = ['ImageStyleDerivative']
    export const isImageStyleDerivative = (obj?: { __typename?: any } | null): obj is ImageStyleDerivative => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageStyleDerivative"')
      return ImageStyleDerivative_possibleTypes.includes(obj.__typename)
    }
    


    const Language_possibleTypes: string[] = ['Language']
    export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
      return Language_possibleTypes.includes(obj.__typename)
    }
    


    const Layout_possibleTypes: string[] = ['Layout']
    export const isLayout = (obj?: { __typename?: any } | null): obj is Layout => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayout"')
      return Layout_possibleTypes.includes(obj.__typename)
    }
    


    const LayoutParagraphs_possibleTypes: string[] = ['LayoutParagraphs']
    export const isLayoutParagraphs = (obj?: { __typename?: any } | null): obj is LayoutParagraphs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayoutParagraphs"')
      return LayoutParagraphs_possibleTypes.includes(obj.__typename)
    }
    


    const LayoutParagraphsInterface_possibleTypes: string[] = ['ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText']
    export const isLayoutParagraphsInterface = (obj?: { __typename?: any } | null): obj is LayoutParagraphsInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayoutParagraphsInterface"')
      return LayoutParagraphsInterface_possibleTypes.includes(obj.__typename)
    }
    


    const LayoutParagraphsPosition_possibleTypes: string[] = ['LayoutParagraphsPosition']
    export const isLayoutParagraphsPosition = (obj?: { __typename?: any } | null): obj is LayoutParagraphsPosition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayoutParagraphsPosition"')
      return LayoutParagraphsPosition_possibleTypes.includes(obj.__typename)
    }
    


    const LayoutPosition_possibleTypes: string[] = ['LayoutPosition']
    export const isLayoutPosition = (obj?: { __typename?: any } | null): obj is LayoutPosition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayoutPosition"')
      return LayoutPosition_possibleTypes.includes(obj.__typename)
    }
    


    const Link_possibleTypes: string[] = ['Link']
    export const isLink = (obj?: { __typename?: any } | null): obj is Link => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLink"')
      return Link_possibleTypes.includes(obj.__typename)
    }
    


    const MediaAudio_possibleTypes: string[] = ['MediaAudio']
    export const isMediaAudio = (obj?: { __typename?: any } | null): obj is MediaAudio => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaAudio"')
      return MediaAudio_possibleTypes.includes(obj.__typename)
    }
    


    const MediaDocument_possibleTypes: string[] = ['MediaDocument']
    export const isMediaDocument = (obj?: { __typename?: any } | null): obj is MediaDocument => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaDocument"')
      return MediaDocument_possibleTypes.includes(obj.__typename)
    }
    


    const MediaImage_possibleTypes: string[] = ['MediaImage']
    export const isMediaImage = (obj?: { __typename?: any } | null): obj is MediaImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaImage"')
      return MediaImage_possibleTypes.includes(obj.__typename)
    }
    


    const MediaRemoteVideo_possibleTypes: string[] = ['MediaRemoteVideo']
    export const isMediaRemoteVideo = (obj?: { __typename?: any } | null): obj is MediaRemoteVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaRemoteVideo"')
      return MediaRemoteVideo_possibleTypes.includes(obj.__typename)
    }
    


    const MediaVideo_possibleTypes: string[] = ['MediaVideo']
    export const isMediaVideo = (obj?: { __typename?: any } | null): obj is MediaVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaVideo"')
      return MediaVideo_possibleTypes.includes(obj.__typename)
    }
    


    const Menu_possibleTypes: string[] = ['Menu']
    export const isMenu = (obj?: { __typename?: any } | null): obj is Menu => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenu"')
      return Menu_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItem_possibleTypes: string[] = ['MenuItem']
    export const isMenuItem = (obj?: { __typename?: any } | null): obj is MenuItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItem"')
      return MenuItem_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTag_possibleTypes: string[] = ['MetaTagLink','MetaTagProperty','MetaTagValue']
    export const isMetaTag = (obj?: { __typename?: any } | null): obj is MetaTag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTag"')
      return MetaTag_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagLink_possibleTypes: string[] = ['MetaTagLink']
    export const isMetaTagLink = (obj?: { __typename?: any } | null): obj is MetaTagLink => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagLink"')
      return MetaTagLink_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagLinkAttributes_possibleTypes: string[] = ['MetaTagLinkAttributes']
    export const isMetaTagLinkAttributes = (obj?: { __typename?: any } | null): obj is MetaTagLinkAttributes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagLinkAttributes"')
      return MetaTagLinkAttributes_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagProperty_possibleTypes: string[] = ['MetaTagProperty']
    export const isMetaTagProperty = (obj?: { __typename?: any } | null): obj is MetaTagProperty => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagProperty"')
      return MetaTagProperty_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagPropertyAttributes_possibleTypes: string[] = ['MetaTagPropertyAttributes']
    export const isMetaTagPropertyAttributes = (obj?: { __typename?: any } | null): obj is MetaTagPropertyAttributes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagPropertyAttributes"')
      return MetaTagPropertyAttributes_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagUnion_possibleTypes: string[] = ['MetaTagLink','MetaTagProperty','MetaTagValue']
    export const isMetaTagUnion = (obj?: { __typename?: any } | null): obj is MetaTagUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagUnion"')
      return MetaTagUnion_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagValue_possibleTypes: string[] = ['MetaTagValue']
    export const isMetaTagValue = (obj?: { __typename?: any } | null): obj is MetaTagValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagValue"')
      return MetaTagValue_possibleTypes.includes(obj.__typename)
    }
    


    const MetaTagValueAttributes_possibleTypes: string[] = ['MetaTagValueAttributes']
    export const isMetaTagValueAttributes = (obj?: { __typename?: any } | null): obj is MetaTagValueAttributes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagValueAttributes"')
      return MetaTagValueAttributes_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['BlockContent','BlockContentAnotherType','BlockContentBasicBlock','BlockPlugin','Layout','MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo','NodePage','ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText','User']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const NodePage_possibleTypes: string[] = ['NodePage']
    export const isNodePage = (obj?: { __typename?: any } | null): obj is NodePage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodePage"')
      return NodePage_possibleTypes.includes(obj.__typename)
    }
    


    const NodePageConnection_possibleTypes: string[] = ['NodePageConnection']
    export const isNodePageConnection = (obj?: { __typename?: any } | null): obj is NodePageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodePageConnection"')
      return NodePageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const NodePageEdge_possibleTypes: string[] = ['NodePageEdge']
    export const isNodePageEdge = (obj?: { __typename?: any } | null): obj is NodePageEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodePageEdge"')
      return NodePageEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphBlock_possibleTypes: string[] = ['ParagraphBlock']
    export const isParagraphBlock = (obj?: { __typename?: any } | null): obj is ParagraphBlock => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphBlock"')
      return ParagraphBlock_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphCallToAction_possibleTypes: string[] = ['ParagraphCallToAction']
    export const isParagraphCallToAction = (obj?: { __typename?: any } | null): obj is ParagraphCallToAction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphCallToAction"')
      return ParagraphCallToAction_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphMedia_possibleTypes: string[] = ['ParagraphMedia']
    export const isParagraphMedia = (obj?: { __typename?: any } | null): obj is ParagraphMedia => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphMedia"')
      return ParagraphMedia_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphQuote_possibleTypes: string[] = ['ParagraphQuote']
    export const isParagraphQuote = (obj?: { __typename?: any } | null): obj is ParagraphQuote => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphQuote"')
      return ParagraphQuote_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphSection_possibleTypes: string[] = ['ParagraphSection']
    export const isParagraphSection = (obj?: { __typename?: any } | null): obj is ParagraphSection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphSection"')
      return ParagraphSection_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphTable_possibleTypes: string[] = ['ParagraphTable']
    export const isParagraphTable = (obj?: { __typename?: any } | null): obj is ParagraphTable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphTable"')
      return ParagraphTable_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphText_possibleTypes: string[] = ['ParagraphText']
    export const isParagraphText = (obj?: { __typename?: any } | null): obj is ParagraphText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphText"')
      return ParagraphText_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Response_possibleTypes: string[] = []
    export const isResponse = (obj?: { __typename?: any } | null): obj is Response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResponse"')
      return Response_possibleTypes.includes(obj.__typename)
    }
    


    const Route_possibleTypes: string[] = ['RouteExternal','RouteInternal','RouteRedirect']
    export const isRoute = (obj?: { __typename?: any } | null): obj is Route => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoute"')
      return Route_possibleTypes.includes(obj.__typename)
    }
    


    const RouteEntityUnion_possibleTypes: string[] = ['NodePage']
    export const isRouteEntityUnion = (obj?: { __typename?: any } | null): obj is RouteEntityUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteEntityUnion"')
      return RouteEntityUnion_possibleTypes.includes(obj.__typename)
    }
    


    const RouteExternal_possibleTypes: string[] = ['RouteExternal']
    export const isRouteExternal = (obj?: { __typename?: any } | null): obj is RouteExternal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteExternal"')
      return RouteExternal_possibleTypes.includes(obj.__typename)
    }
    


    const RouteInternal_possibleTypes: string[] = ['RouteInternal']
    export const isRouteInternal = (obj?: { __typename?: any } | null): obj is RouteInternal => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteInternal"')
      return RouteInternal_possibleTypes.includes(obj.__typename)
    }
    


    const RouteRedirect_possibleTypes: string[] = ['RouteRedirect']
    export const isRouteRedirect = (obj?: { __typename?: any } | null): obj is RouteRedirect => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteRedirect"')
      return RouteRedirect_possibleTypes.includes(obj.__typename)
    }
    


    const RouteUnion_possibleTypes: string[] = ['RouteExternal','RouteInternal','RouteRedirect']
    export const isRouteUnion = (obj?: { __typename?: any } | null): obj is RouteUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteUnion"')
      return RouteUnion_possibleTypes.includes(obj.__typename)
    }
    


    const SchemaInformation_possibleTypes: string[] = ['SchemaInformation']
    export const isSchemaInformation = (obj?: { __typename?: any } | null): obj is SchemaInformation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSchemaInformation"')
      return SchemaInformation_possibleTypes.includes(obj.__typename)
    }
    


    const Table_possibleTypes: string[] = ['Table']
    export const isTable = (obj?: { __typename?: any } | null): obj is Table => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTable"')
      return Table_possibleTypes.includes(obj.__typename)
    }
    


    const TableRow_possibleTypes: string[] = ['TableRow']
    export const isTableRow = (obj?: { __typename?: any } | null): obj is TableRow => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTableRow"')
      return TableRow_possibleTypes.includes(obj.__typename)
    }
    


    const Text_possibleTypes: string[] = ['Text']
    export const isText = (obj?: { __typename?: any } | null): obj is Text => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isText"')
      return Text_possibleTypes.includes(obj.__typename)
    }
    


    const TextSummary_possibleTypes: string[] = ['TextSummary']
    export const isTextSummary = (obj?: { __typename?: any } | null): obj is TextSummary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTextSummary"')
      return TextSummary_possibleTypes.includes(obj.__typename)
    }
    


    const TypeBlockContentInterface_possibleTypes: string[] = ['BlockContentAnotherType','BlockContentBasicBlock']
    export const isTypeBlockContentInterface = (obj?: { __typename?: any } | null): obj is TypeBlockContentInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeBlockContentInterface"')
      return TypeBlockContentInterface_possibleTypes.includes(obj.__typename)
    }
    


    const TypeBlockContentUnion_possibleTypes: string[] = ['BlockContentAnotherType','BlockContentBasicBlock']
    export const isTypeBlockContentUnion = (obj?: { __typename?: any } | null): obj is TypeBlockContentUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeBlockContentUnion"')
      return TypeBlockContentUnion_possibleTypes.includes(obj.__typename)
    }
    


    const TypeMediaInterface_possibleTypes: string[] = ['MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo']
    export const isTypeMediaInterface = (obj?: { __typename?: any } | null): obj is TypeMediaInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeMediaInterface"')
      return TypeMediaInterface_possibleTypes.includes(obj.__typename)
    }
    


    const TypeMediaUnion_possibleTypes: string[] = ['MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo']
    export const isTypeMediaUnion = (obj?: { __typename?: any } | null): obj is TypeMediaUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeMediaUnion"')
      return TypeMediaUnion_possibleTypes.includes(obj.__typename)
    }
    


    const TypeNodeInterface_possibleTypes: string[] = ['NodePage']
    export const isTypeNodeInterface = (obj?: { __typename?: any } | null): obj is TypeNodeInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeNodeInterface"')
      return TypeNodeInterface_possibleTypes.includes(obj.__typename)
    }
    


    const TypeParagraphInterface_possibleTypes: string[] = ['ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText']
    export const isTypeParagraphInterface = (obj?: { __typename?: any } | null): obj is TypeParagraphInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeParagraphInterface"')
      return TypeParagraphInterface_possibleTypes.includes(obj.__typename)
    }
    


    const TypeParagraphUnion_possibleTypes: string[] = ['ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText']
    export const isTypeParagraphUnion = (obj?: { __typename?: any } | null): obj is TypeParagraphUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeParagraphUnion"')
      return TypeParagraphUnion_possibleTypes.includes(obj.__typename)
    }
    


    const TypeTermInterface_possibleTypes: string[] = []
    export const isTypeTermInterface = (obj?: { __typename?: any } | null): obj is TypeTermInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeTermInterface"')
      return TypeTermInterface_possibleTypes.includes(obj.__typename)
    }
    


    const TypeUserInterface_possibleTypes: string[] = ['User']
    export const isTypeUserInterface = (obj?: { __typename?: any } | null): obj is TypeUserInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTypeUserInterface"')
      return TypeUserInterface_possibleTypes.includes(obj.__typename)
    }
    


    const UnsupportedType_possibleTypes: string[] = ['UnsupportedType']
    export const isUnsupportedType = (obj?: { __typename?: any } | null): obj is UnsupportedType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUnsupportedType"')
      return UnsupportedType_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    

export const enumImageStyleAvailable = {
   UNDEFINED: 'UNDEFINED' as const
}

export const enumMenuAvailable = {
   FOOTER: 'FOOTER' as const,
   MAIN: 'MAIN' as const
}

export const enumNodePageSortKeys = {
   CREATED_AT: 'CREATED_AT' as const
}

export const enumUserStatus = {
   ACTIVE: 'ACTIVE' as const,
   BLOCKED: 'BLOCKED' as const
}

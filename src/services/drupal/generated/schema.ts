// @ts-nocheck
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
    additionalName?: (Scalars['String'] | null)
    addressLine1?: (Scalars['String'] | null)
    addressLine2?: (Scalars['String'] | null)
    administrativeArea?: (Scalars['String'] | null)
    country?: (AddressCountry | null)
    dependentLocality?: (Scalars['String'] | null)
    familyName?: (Scalars['String'] | null)
    givenName?: (Scalars['String'] | null)
    langcode?: (Scalars['String'] | null)
    locality?: (Scalars['String'] | null)
    organization?: (Scalars['String'] | null)
    postalCode?: (Scalars['String'] | null)
    sortingCode?: (Scalars['String'] | null)
    __typename: 'Address'
}


/** Address country. */
export interface AddressCountry {
    code?: (Scalars['String'] | null)
    name?: (Scalars['String'] | null)
    __typename: 'AddressCountry'
}


/** Block field information. */
export type Block = (BlockContent | BlockPlugin) & { __isUnion?: true }


/** Block field information. */
export interface BlockContent {
    entity?: (BlockContentUnion | null)
    id: Scalars['ID']
    render?: (Scalars['Html'] | null)
    title?: (Scalars['String'] | null)
    __typename: 'BlockContent'
}


/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherType {
    /** Body */
    body?: (TextSummary | null)
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
    body?: (TextSummary | null)
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


/** Entity type block_content. */
export type BlockContentInterface = (BlockContentAnotherType | BlockContentBasicBlock) & { __isUnion?: true }

export type BlockContentUnion = (BlockContentAnotherType | BlockContentBasicBlock) & { __isUnion?: true }


/** Block field information. */
export interface BlockField {
    block?: (Block | null)
    configuration?: (Scalars['Attributes'] | null)
    plugin_id?: (Scalars['ID'] | null)
    __typename: 'BlockField'
}


/** Block field information. */
export interface BlockPlugin {
    id: Scalars['ID']
    render?: (Scalars['Html'] | null)
    title?: (Scalars['String'] | null)
    __typename: 'BlockPlugin'
}


/** Block types that can exist in the system. */
export type BlockUnion = (BlockContent | BlockPlugin) & { __isUnion?: true }


/** A paginated set of results. */
export interface Connection {
    /** The edges of this connection. */
    edges: Edge[]
    /** The nodes of the edges of this connection. */
    nodes: Node[]
    /** Information to aid in pagination. */
    pageInfo: ConnectionPageInfo
    __typename: string
}


/** Information about the page in a connection. */
export interface ConnectionPageInfo {
    /** The cursor for the last element in this page. */
    endCursor: Scalars['Cursor']
    /** Whether there are more pages in this connection. */
    hasNextPage: Scalars['Boolean']
    /** Whether there are previous pages in this connection. */
    hasPreviousPage: Scalars['Boolean']
    /** The cursor for the first element in this page. */
    startCursor: Scalars['Cursor']
    __typename: 'ConnectionPageInfo'
}


/** Choose how your sorts will occur and on which field. */
export type ConnectionSortKeys = 'CREATED_AT' | 'PROMOTED' | 'STICKY' | 'TITLE' | 'UPDATED_AT'


/** A Date range has a start and an end. */
export interface DateRange {
    end?: (DateTime | null)
    start?: (DateTime | null)
    __typename: 'DateRange'
}


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
export interface Edge {
    cursor: Scalars['Cursor']
    node: Node
    __typename: string
}


/** A file object to represent an managed file. */
export interface File {
    description?: (Scalars['String'] | null)
    mime?: (Scalars['String'] | null)
    name?: (Scalars['String'] | null)
    size: Scalars['Int']
    url: Scalars['String']
    __typename: 'File'
}


/** A image object to represent an managed file. */
export interface Image {
    alt?: (Scalars['String'] | null)
    height: Scalars['Int']
    mime?: (Scalars['String'] | null)
    title?: (Scalars['String'] | null)
    url: Scalars['String']
    /** Image variations control different sizes and formats for images. */
    variations?: (ImageStyleDerivative[] | null)
    width: Scalars['Int']
    __typename: 'Image'
}


/** Entity type image_style. */
export interface ImageStyle {
    id: Scalars['ID']
    name?: (Scalars['String'] | null)
    __typename: 'ImageStyle'
}


/** List of image styles available to use. */
export type ImageStyleAvailable = 'LARGE' | 'LARGE2X' | 'MEDIUM' | 'MEDIUM2X' | 'THUMBNAIL' | 'WIDE' | 'WIDE2X'


/** ImageStyle derivatives for an Image. */
export interface ImageStyleDerivative {
    height: Scalars['Int']
    name: Scalars['String']
    url: Scalars['String']
    width: Scalars['Int']
    __typename: 'ImageStyleDerivative'
}

export type ImageStyleUnion = (ImageStyle) & { __isUnion?: true }


/** A language definition provided by the CMS. */
export interface Language {
    direction?: (Scalars['String'] | null)
    id?: (Scalars['ID'] | null)
    name?: (Scalars['String'] | null)
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
    layout?: (Layout | null)
    position?: (LayoutParagraphsPosition | null)
    __typename: 'LayoutParagraphs'
}


/** This content has been arranged by a User using a layout builder. */
export type LayoutParagraphsInterface = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/** This component positionally belongs to another component's layout. */
export interface LayoutParagraphsPosition {
    /** Parent component this component belongs to. */
    parentId?: (Scalars['ID'] | null)
    /** There this component is suggested to live within the parent component's regions. */
    region?: (Scalars['String'] | null)
    __typename: 'LayoutParagraphsPosition'
}


/** This component positionally belongs to another component's layout. */
export interface LayoutPosition {
    /** Parent component this component belongs to. */
    parentId?: (Scalars['ID'] | null)
    /** There this component is suggested to live within the parent component's regions. */
    region?: (Scalars['String'] | null)
    __typename: 'LayoutPosition'
}

export interface Link {
    route?: (RouteUnion | null)
    title?: (Scalars['String'] | null)
    url?: (Scalars['String'] | null)
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


/** Entity type media. */
export type MediaInterface = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & { __isUnion?: true }


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
    /** Published */
    status: Scalars['Boolean']
    /** Video URL */
    url: Scalars['String']
    __typename: 'MediaRemoteVideo'
}

export type MediaUnion = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & { __isUnion?: true }


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
    items: MenuItem[]
    name: Scalars['String']
    __typename: 'Menu'
}


/** List of menus available to load. */
export type MenuAvailable = 'FOOTER' | 'MAIN'


/** A menu item defined in the CMS. */
export interface MenuItem {
    attributes: MenuItemAttributes
    children: MenuItem[]
    description?: (Scalars['String'] | null)
    expanded: Scalars['Boolean']
    route?: (RouteUnion | null)
    title: Scalars['String']
    __typename: 'MenuItem'
}


/** Menu item options set within the CMS. */
export interface MenuItemAttributes {
    /** Menu item attribute class. */
    class?: (Scalars['String'] | null)
    /** Menu item attribute id. */
    id?: (Scalars['String'] | null)
    /** Menu item attribute target. */
    target?: (Scalars['String'] | null)
    __typename: 'MenuItemAttributes'
}

export type MenuUnion = (Menu) & { __isUnion?: true }


/** Meta elements are tags used in HTML and XHTML documents to provide structured metadata about a Web page. */
export type MetaTag = (MetaTagLink | MetaTagProperty | MetaTagValue) & { __isUnion?: true }

export interface MetaTagLink {
    attributes: MetaTagLinkAttributes
    tag: Scalars['String']
    __typename: 'MetaTagLink'
}

export interface MetaTagLinkAttributes {
    href?: (Scalars['String'] | null)
    rel?: (Scalars['String'] | null)
    __typename: 'MetaTagLinkAttributes'
}

export interface MetaTagProperty {
    attributes: MetaTagPropertyAttributes
    tag: Scalars['String']
    __typename: 'MetaTagProperty'
}

export interface MetaTagPropertyAttributes {
    content?: (Scalars['String'] | null)
    property?: (Scalars['String'] | null)
    __typename: 'MetaTagPropertyAttributes'
}

export type MetaTagUnion = (MetaTagLink | MetaTagProperty | MetaTagValue) & { __isUnion?: true }

export interface MetaTagValue {
    attributes: MetaTagValueAttributes
    tag: Scalars['String']
    __typename: 'MetaTagValue'
}

export interface MetaTagValueAttributes {
    content?: (Scalars['String'] | null)
    name?: (Scalars['String'] | null)
    __typename: 'MetaTagValueAttributes'
}


/** A GraphQL mutation is a request that changes data on the server. */
export interface Mutation {
    /** Dummy value to enable mutation extension. */
    _?: (Scalars['Boolean'] | null)
    __typename: 'Mutation'
}


/** A concrete fetchable type that is addressable by an id. Not to be confused with a Drupal node. */
export type Node = (BlockContent | BlockContentAnotherType | BlockContentBasicBlock | BlockPlugin | Layout | MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo | NodePage | ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText | TermTags | User) & { __isUnion?: true }


/** Entity type node. */
export type NodeInterface = (NodePage) & { __isUnion?: true }


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePage {
    /** The username of the content author. */
    author: User
    /** The time that the node was last edited. */
    changed: DateTime
    /** Content */
    content?: (ParagraphUnion[] | null)
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

export type NodeUnion = (NodePage) & { __isUnion?: true }


/** Add an expanding and collapsing element. */
export interface ParagraphAccordion {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Content */
    items: ParagraphUnion[]
    /** Title */
    title: Scalars['String']
    __typename: 'ParagraphAccordion'
}


/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlock {
    /** Block */
    block?: (BlockUnion | null)
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** Feature */
    feature?: (Scalars['String'] | null)
    /** UUID */
    id: Scalars['ID']
    __typename: 'ParagraphBlock'
}


/** Add a title, text content with formatting and link. */
export interface ParagraphCallToAction {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Link */
    link?: (Link | null)
    /** Text */
    text?: (Text | null)
    /** Title */
    title?: (Scalars['String'] | null)
    __typename: 'ParagraphCallToAction'
}


/** Entity type paragraph. */
export type ParagraphInterface = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMedia {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** Description */
    description?: (Text | null)
    /** UUID */
    id: Scalars['ID']
    /** Media */
    media: MediaUnion
    /** Title */
    title?: (Scalars['String'] | null)
    __typename: 'ParagraphMedia'
}


/** Add a quote. Add citation and citation link */
export interface ParagraphQuote {
    /** Give credit for the quote. */
    citation?: (Scalars['String'] | null)
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Enter an optional link for the citation. */
    link?: (Link | null)
    /** Quote */
    quote: Text
    __typename: 'ParagraphQuote'
}


/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSection {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    __typename: 'ParagraphSection'
}


/** Create a table with your own columns and rows. */
export interface ParagraphTable {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Table */
    table: Table
    /** Add a title to your block */
    title?: (Scalars['String'] | null)
    __typename: 'ParagraphTable'
}


/** Text based content with formatting. */
export interface ParagraphText {
    /** Layout metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** UUID */
    id: Scalars['ID']
    /** Text */
    text: Text
    __typename: 'ParagraphText'
}

export type ParagraphUnion = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/**
 * The schema's entry-point for queries.
 * 
 * This acts as the public, top-level API from which all queries must start.
 */
export interface Query {
    /** Load a Block plugin. */
    block?: (BlockUnion | null)
    /** Schema generator version. */
    info: SchemaInformation
    /** Load a Route by path. */
    menu?: (Menu | null)
    /** Load a Route by path. */
    route?: (RouteUnion | null)
    /** Get information about the currently authenticated user. NULL if not logged in. */
    viewer?: (User | null)
    __typename: 'Query'
}


/** The base GraphQL Response class. */
export interface Response {
    errors?: ((Scalars['Violation'] | null)[] | null)
    __typename: string
}


/** Routes represent incoming requests that resolve to content. */
export type Route = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** A list of possible entities that can be returned by URL. */
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
    entity?: (RouteEntityUnion | null)
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
    /** Schema description. */
    description: Scalars['String']
    /** Path to the homepage. */
    home?: (Scalars['String'] | null)
    /** Schema module version. */
    version: Scalars['String']
    __typename: 'SchemaInformation'
}


/** List of menus available to load. */
export type SortDirection = 'ASC' | 'DESC'

export interface Table {
    caption?: (Scalars['String'] | null)
    /** A text format associated with the row data. */
    format?: (Scalars['String'] | null)
    rows?: ((TableRow | null)[] | null)
    __typename: 'Table'
}

export interface TableRow {
    data?: ((Scalars['String'] | null)[] | null)
    weight?: (Scalars['Int'] | null)
    __typename: 'TableRow'
}


/** Entity type taxonomy_term. */
export type TermInterface = (TermTags) & { __isUnion?: true }


/** Tags */
export interface TermTags {
    /** The time that the term was last edited. */
    changed: DateTime
    /** Description */
    description: Text
    /** The term UUID. */
    id: Scalars['ID']
    /** The term language code. */
    langcode: Language
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    __typename: 'TermTags'
}

export type TermUnion = (TermTags) & { __isUnion?: true }


/** A processed text format defined by the CMS. */
export interface Text {
    format?: (Scalars['String'] | null)
    processed?: (Scalars['Html'] | null)
    value?: (Scalars['String'] | null)
    __typename: 'Text'
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummary {
    format?: (Scalars['String'] | null)
    processed?: (Scalars['Html'] | null)
    summary?: (Scalars['Html'] | null)
    value?: (Scalars['String'] | null)
    __typename: 'TextSummary'
}


/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedType {
    /** Unsupported type, always TRUE. */
    unsupported?: (Scalars['Boolean'] | null)
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
    mail?: (Scalars['Email'] | null)
    /** The name of this user. */
    name: Scalars['String']
    /** The roles the user has. */
    roles?: (Scalars['UserRoles'][] | null)
    /** Whether the user is active or blocked. */
    status: UserStatus
    /** Your virtual face or picture. */
    userPicture?: (Image | null)
    __typename: 'User'
}


/** Entity type user. */
export type UserInterface = (User) & { __isUnion?: true }


/** Whether the user is active or blocked. */
export type UserStatus = 'ACTIVE' | 'BLOCKED'

export type UserUnion = (User) & { __isUnion?: true }


/** Complex address data. */
export interface AddressGenqlSelection{
    additionalName?: boolean | number
    addressLine1?: boolean | number
    addressLine2?: boolean | number
    administrativeArea?: boolean | number
    country?: AddressCountryGenqlSelection
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


/** Address country. */
export interface AddressCountryGenqlSelection{
    code?: boolean | number
    name?: boolean | number
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
    entity?: BlockContentUnionGenqlSelection
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


/** Entity type block_content. */
export interface BlockContentInterfaceGenqlSelection{
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

export interface BlockContentUnionGenqlSelection{
    on_BlockContentAnotherType?:BlockContentAnotherTypeGenqlSelection,
    on_BlockContentBasicBlock?:BlockContentBasicBlockGenqlSelection,
    on_BlockContentInterface?: BlockContentInterfaceGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
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
    pageInfo?: ConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about the page in a connection. */
export interface ConnectionPageInfoGenqlSelection{
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


/** A Date range has a start and an end. */
export interface DateRangeGenqlSelection{
    end?: DateTimeGenqlSelection
    start?: DateTimeGenqlSelection
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
    mime?: boolean | number
    title?: boolean | number
    url?: boolean | number
    /** Image variations control different sizes and formats for images. */
    variations?: (ImageStyleDerivativeGenqlSelection & { __args?: {styles?: ((ImageStyleAvailable | null)[] | null)} })
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type image_style. */
export interface ImageStyleGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** ImageStyle derivatives for an Image. */
export interface ImageStyleDerivativeGenqlSelection{
    height?: boolean | number
    name?: boolean | number
    url?: boolean | number
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageStyleUnionGenqlSelection{
    on_ImageStyle?:ImageStyleGenqlSelection,
    __typename?: boolean | number
}


/** Generic untyped input for key-value pairs. */
export interface KeyValueInput {key: Scalars['String'],value?: (Scalars['String'] | null)}


/** A language definition provided by the CMS. */
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
    on_ParagraphAccordion?: ParagraphAccordionGenqlSelection
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


/** Entity type media. */
export interface MediaInterfaceGenqlSelection{
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
    /** Published */
    status?: boolean | number
    /** Video URL */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MediaUnionGenqlSelection{
    on_MediaAudio?:MediaAudioGenqlSelection,
    on_MediaDocument?:MediaDocumentGenqlSelection,
    on_MediaImage?:MediaImageGenqlSelection,
    on_MediaRemoteVideo?:MediaRemoteVideoGenqlSelection,
    on_MediaVideo?:MediaVideoGenqlSelection,
    on_MediaInterface?: MediaInterfaceGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
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
    attributes?: MenuItemAttributesGenqlSelection
    children?: MenuItemGenqlSelection
    description?: boolean | number
    expanded?: boolean | number
    route?: RouteUnionGenqlSelection
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Menu item options set within the CMS. */
export interface MenuItemAttributesGenqlSelection{
    /** Menu item attribute class. */
    class?: boolean | number
    /** Menu item attribute id. */
    id?: boolean | number
    /** Menu item attribute target. */
    target?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MenuUnionGenqlSelection{
    on_Menu?:MenuGenqlSelection,
    __typename?: boolean | number
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


/** A GraphQL mutation is a request that changes data on the server. */
export interface MutationGenqlSelection{
    /** Dummy value to enable mutation extension. */
    _?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A concrete fetchable type that is addressable by an id. Not to be confused with a Drupal node. */
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
    on_ParagraphAccordion?: ParagraphAccordionGenqlSelection
    on_ParagraphBlock?: ParagraphBlockGenqlSelection
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection
    on_ParagraphMedia?: ParagraphMediaGenqlSelection
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection
    on_ParagraphSection?: ParagraphSectionGenqlSelection
    on_ParagraphTable?: ParagraphTableGenqlSelection
    on_ParagraphText?: ParagraphTextGenqlSelection
    on_TermTags?: TermTagsGenqlSelection
    on_User?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type node. */
export interface NodeInterfaceGenqlSelection{
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


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePageGenqlSelection{
    /** The username of the content author. */
    author?: UserGenqlSelection
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** Content */
    content?: ParagraphUnionGenqlSelection
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

export interface NodeUnionGenqlSelection{
    on_NodePage?:NodePageGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_NodeInterface?: NodeInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Add an expanding and collapsing element. */
export interface ParagraphAccordionGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Content */
    items?: ParagraphUnionGenqlSelection
    /** Title */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlockGenqlSelection{
    /** Block */
    block?: BlockUnionGenqlSelection
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
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
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
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


/** Entity type paragraph. */
export interface ParagraphInterfaceGenqlSelection{
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    on_ParagraphAccordion?: ParagraphAccordionGenqlSelection
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


/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMediaGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** Description */
    description?: TextGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Media */
    media?: MediaUnionGenqlSelection
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
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
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
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Create a table with your own columns and rows. */
export interface ParagraphTableGenqlSelection{
    /** Layout metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
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
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** UUID */
    id?: boolean | number
    /** Text */
    text?: TextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ParagraphUnionGenqlSelection{
    on_ParagraphAccordion?:ParagraphAccordionGenqlSelection,
    on_ParagraphBlock?:ParagraphBlockGenqlSelection,
    on_ParagraphCallToAction?:ParagraphCallToActionGenqlSelection,
    on_ParagraphMedia?:ParagraphMediaGenqlSelection,
    on_ParagraphQuote?:ParagraphQuoteGenqlSelection,
    on_ParagraphSection?:ParagraphSectionGenqlSelection,
    on_ParagraphTable?:ParagraphTableGenqlSelection,
    on_ParagraphText?:ParagraphTextGenqlSelection,
    on_LayoutParagraphsInterface?: LayoutParagraphsInterfaceGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_ParagraphInterface?: ParagraphInterfaceGenqlSelection,
    __typename?: boolean | number
}


/**
 * The schema's entry-point for queries.
 * 
 * This acts as the public, top-level API from which all queries must start.
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
    /** Load a Route by path. */
    route?: (RouteUnionGenqlSelection & { __args: {
    /** Filter the route by language. Eg en, ja, fr. Defaults to site default language. */
    langcode?: (Scalars['String'] | null), 
    /** Internal path to load. Eg /about */
    path: Scalars['String']} })
    /** Get information about the currently authenticated user. NULL if not logged in. */
    viewer?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The base GraphQL Response class. */
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


/** A list of possible entities that can be returned by URL. */
export interface RouteEntityUnionGenqlSelection{
    on_NodePage?:NodePageGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_NodeInterface?: NodeInterfaceGenqlSelection,
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
    /** Schema description. */
    description?: boolean | number
    /** Path to the homepage. */
    home?: boolean | number
    /** Schema module version. */
    version?: boolean | number
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


/** Entity type taxonomy_term. */
export interface TermInterfaceGenqlSelection{
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
    on_TermTags?: TermTagsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Tags */
export interface TermTagsGenqlSelection{
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

export interface TermUnionGenqlSelection{
    on_TermTags?:TermTagsGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_TermInterface?: TermInterfaceGenqlSelection,
    __typename?: boolean | number
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
    /** Your virtual face or picture. */
    userPicture?: ImageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type user. */
export interface UserInterfaceGenqlSelection{
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

export interface UserUnionGenqlSelection{
    on_User?:UserGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_UserInterface?: UserInterfaceGenqlSelection,
    __typename?: boolean | number
}


    const Address_possibleTypes: string[] = ['Address']
    export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
      return Address_possibleTypes.includes(obj.__typename)
    }
    


    const AddressCountry_possibleTypes: string[] = ['AddressCountry']
    export const isAddressCountry = (obj?: { __typename?: any } | null): obj is AddressCountry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAddressCountry"')
      return AddressCountry_possibleTypes.includes(obj.__typename)
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
    


    const BlockContentInterface_possibleTypes: string[] = ['BlockContentAnotherType','BlockContentBasicBlock']
    export const isBlockContentInterface = (obj?: { __typename?: any } | null): obj is BlockContentInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockContentInterface"')
      return BlockContentInterface_possibleTypes.includes(obj.__typename)
    }
    


    const BlockContentUnion_possibleTypes: string[] = ['BlockContentAnotherType','BlockContentBasicBlock']
    export const isBlockContentUnion = (obj?: { __typename?: any } | null): obj is BlockContentUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockContentUnion"')
      return BlockContentUnion_possibleTypes.includes(obj.__typename)
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
    


    const Connection_possibleTypes: string[] = []
    export const isConnection = (obj?: { __typename?: any } | null): obj is Connection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnection"')
      return Connection_possibleTypes.includes(obj.__typename)
    }
    


    const ConnectionPageInfo_possibleTypes: string[] = ['ConnectionPageInfo']
    export const isConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnectionPageInfo"')
      return ConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const DateRange_possibleTypes: string[] = ['DateRange']
    export const isDateRange = (obj?: { __typename?: any } | null): obj is DateRange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateRange"')
      return DateRange_possibleTypes.includes(obj.__typename)
    }
    


    const DateTime_possibleTypes: string[] = ['DateTime']
    export const isDateTime = (obj?: { __typename?: any } | null): obj is DateTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDateTime"')
      return DateTime_possibleTypes.includes(obj.__typename)
    }
    


    const Edge_possibleTypes: string[] = []
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
    


    const ImageStyleUnion_possibleTypes: string[] = ['ImageStyle']
    export const isImageStyleUnion = (obj?: { __typename?: any } | null): obj is ImageStyleUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageStyleUnion"')
      return ImageStyleUnion_possibleTypes.includes(obj.__typename)
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
    


    const LayoutParagraphsInterface_possibleTypes: string[] = ['ParagraphAccordion','ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText']
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
    


    const MediaInterface_possibleTypes: string[] = ['MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo']
    export const isMediaInterface = (obj?: { __typename?: any } | null): obj is MediaInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaInterface"')
      return MediaInterface_possibleTypes.includes(obj.__typename)
    }
    


    const MediaRemoteVideo_possibleTypes: string[] = ['MediaRemoteVideo']
    export const isMediaRemoteVideo = (obj?: { __typename?: any } | null): obj is MediaRemoteVideo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaRemoteVideo"')
      return MediaRemoteVideo_possibleTypes.includes(obj.__typename)
    }
    


    const MediaUnion_possibleTypes: string[] = ['MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo']
    export const isMediaUnion = (obj?: { __typename?: any } | null): obj is MediaUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaUnion"')
      return MediaUnion_possibleTypes.includes(obj.__typename)
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
    


    const MenuItemAttributes_possibleTypes: string[] = ['MenuItemAttributes']
    export const isMenuItemAttributes = (obj?: { __typename?: any } | null): obj is MenuItemAttributes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemAttributes"')
      return MenuItemAttributes_possibleTypes.includes(obj.__typename)
    }
    


    const MenuUnion_possibleTypes: string[] = ['Menu']
    export const isMenuUnion = (obj?: { __typename?: any } | null): obj is MenuUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuUnion"')
      return MenuUnion_possibleTypes.includes(obj.__typename)
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
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['BlockContent','BlockContentAnotherType','BlockContentBasicBlock','BlockPlugin','Layout','MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo','NodePage','ParagraphAccordion','ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText','TermTags','User']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const NodeInterface_possibleTypes: string[] = ['NodePage']
    export const isNodeInterface = (obj?: { __typename?: any } | null): obj is NodeInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeInterface"')
      return NodeInterface_possibleTypes.includes(obj.__typename)
    }
    


    const NodePage_possibleTypes: string[] = ['NodePage']
    export const isNodePage = (obj?: { __typename?: any } | null): obj is NodePage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodePage"')
      return NodePage_possibleTypes.includes(obj.__typename)
    }
    


    const NodeUnion_possibleTypes: string[] = ['NodePage']
    export const isNodeUnion = (obj?: { __typename?: any } | null): obj is NodeUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeUnion"')
      return NodeUnion_possibleTypes.includes(obj.__typename)
    }
    


    const ParagraphAccordion_possibleTypes: string[] = ['ParagraphAccordion']
    export const isParagraphAccordion = (obj?: { __typename?: any } | null): obj is ParagraphAccordion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphAccordion"')
      return ParagraphAccordion_possibleTypes.includes(obj.__typename)
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
    


    const ParagraphInterface_possibleTypes: string[] = ['ParagraphAccordion','ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText']
    export const isParagraphInterface = (obj?: { __typename?: any } | null): obj is ParagraphInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphInterface"')
      return ParagraphInterface_possibleTypes.includes(obj.__typename)
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
    


    const ParagraphUnion_possibleTypes: string[] = ['ParagraphAccordion','ParagraphBlock','ParagraphCallToAction','ParagraphMedia','ParagraphQuote','ParagraphSection','ParagraphTable','ParagraphText']
    export const isParagraphUnion = (obj?: { __typename?: any } | null): obj is ParagraphUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isParagraphUnion"')
      return ParagraphUnion_possibleTypes.includes(obj.__typename)
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
    


    const TermInterface_possibleTypes: string[] = ['TermTags']
    export const isTermInterface = (obj?: { __typename?: any } | null): obj is TermInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermInterface"')
      return TermInterface_possibleTypes.includes(obj.__typename)
    }
    


    const TermTags_possibleTypes: string[] = ['TermTags']
    export const isTermTags = (obj?: { __typename?: any } | null): obj is TermTags => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermTags"')
      return TermTags_possibleTypes.includes(obj.__typename)
    }
    


    const TermUnion_possibleTypes: string[] = ['TermTags']
    export const isTermUnion = (obj?: { __typename?: any } | null): obj is TermUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermUnion"')
      return TermUnion_possibleTypes.includes(obj.__typename)
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
    


    const UserInterface_possibleTypes: string[] = ['User']
    export const isUserInterface = (obj?: { __typename?: any } | null): obj is UserInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserInterface"')
      return UserInterface_possibleTypes.includes(obj.__typename)
    }
    


    const UserUnion_possibleTypes: string[] = ['User']
    export const isUserUnion = (obj?: { __typename?: any } | null): obj is UserUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserUnion"')
      return UserUnion_possibleTypes.includes(obj.__typename)
    }
    

export const enumConnectionSortKeys = {
   CREATED_AT: 'CREATED_AT' as const,
   PROMOTED: 'PROMOTED' as const,
   STICKY: 'STICKY' as const,
   TITLE: 'TITLE' as const,
   UPDATED_AT: 'UPDATED_AT' as const
}

export const enumImageStyleAvailable = {
   LARGE: 'LARGE' as const,
   LARGE2X: 'LARGE2X' as const,
   MEDIUM: 'MEDIUM' as const,
   MEDIUM2X: 'MEDIUM2X' as const,
   THUMBNAIL: 'THUMBNAIL' as const,
   WIDE: 'WIDE' as const,
   WIDE2X: 'WIDE2X' as const
}

export const enumMenuAvailable = {
   FOOTER: 'FOOTER' as const,
   MAIN: 'MAIN' as const
}

export const enumSortDirection = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumUserStatus = {
   ACTIVE: 'ACTIVE' as const,
   BLOCKED: 'BLOCKED' as const
}

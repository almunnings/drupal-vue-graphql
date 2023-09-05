// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
}


/** Complex address data. */
export interface Address {
    additionalName: (Scalars['String'] | null)
    addressLine1: (Scalars['String'] | null)
    addressLine2: (Scalars['String'] | null)
    administrativeArea: (Scalars['String'] | null)
    country: (AddressCountry | null)
    dependentLocality: (Scalars['String'] | null)
    familyName: (Scalars['String'] | null)
    givenName: (Scalars['String'] | null)
    langcode: (Scalars['String'] | null)
    locality: (Scalars['String'] | null)
    organization: (Scalars['String'] | null)
    postalCode: (Scalars['String'] | null)
    sortingCode: (Scalars['String'] | null)
    __typename: 'Address'
}


/** Address country. */
export interface AddressCountry {
    /** The code of the country. */
    code: (Scalars['String'] | null)
    /** The name of the country. */
    name: (Scalars['String'] | null)
    __typename: 'AddressCountry'
}


/** Block content is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockContent {
    /** The Content Block entity to be displayed within the block. */
    entity: BlockContentUnion
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The rendered output of the block. */
    render: (Scalars['Html'] | null)
    /** The title of the block if provided. */
    title: (Scalars['String'] | null)
    __typename: 'BlockContent'
}


/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherType {
    /** Body */
    body: (TextSummary | null)
    /** The time that the content block was last edited. */
    changed: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The content block language code. */
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
    body: (TextSummary | null)
    /** The time that the content block was last edited. */
    changed: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The content block language code. */
    langcode: Language
    /** A boolean indicating whether this block is reusable. */
    reusable: Scalars['Boolean']
    /** A brief description of your block. */
    title: Scalars['String']
    __typename: 'BlockContentBasicBlock'
}


/** Entity type block_content. */
export type BlockContentInterface = (BlockContentAnotherType | BlockContentBasicBlock) & { __isUnion?: true }


/** Entity type block_content. */
export type BlockContentUnion = (BlockContentAnotherType | BlockContentBasicBlock) & { __isUnion?: true }


/** Blocks are a modular piece of content that can be displayed in various regions of a website's layout. */
export type BlockInterface = (BlockContent | BlockPlugin) & { __isUnion?: true }


/** A generic block plugin is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockPlugin {
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The rendered output of the block. */
    render: (Scalars['Html'] | null)
    /** The title of the block if provided. */
    title: (Scalars['String'] | null)
    __typename: 'BlockPlugin'
}


/** Block types that can exist in the system. */
export type BlockUnion = (BlockContent | BlockPlugin) & { __isUnion?: true }


/** A paginated set of results. */
export interface Connection {
    /** The edges of this connection. */
    edges: Edge[]
    /** The nodes of the edges of this connection. */
    nodes: EdgeNode[]
    /** Information to aid in pagination. */
    pageInfo: ConnectionPageInfo
    __typename: string
}


/** Information about the page in a connection. */
export interface ConnectionPageInfo {
    /** The cursor for the last element in this page. */
    endCursor: (Scalars['Cursor'] | null)
    /** Whether there are more pages in this connection. */
    hasNextPage: Scalars['Boolean']
    /** Whether there are previous pages in this connection. */
    hasPreviousPage: Scalars['Boolean']
    /** The cursor for the first element in this page. */
    startCursor: (Scalars['Cursor'] | null)
    __typename: 'ConnectionPageInfo'
}


/** Choose how your sorts will occur and on which field. */
export type ConnectionSortKeys = 'CREATED_AT' | 'PROMOTED' | 'STICKY' | 'TITLE' | 'UPDATED_AT'


/** A Date range has a start and an end. */
export interface DateRange {
    /** The end of the date range. */
    end: (DateTime | null)
    /** The start of the date range. */
    start: (DateTime | null)
    __typename: 'DateRange'
}


/** A DateTime object. */
export interface DateTime {
    /** A string that will have a value of format ±hh:mm */
    offset: Scalars['UtcOffset']
    /** RFC 3339 compliant time string. */
    time: Scalars['Time']
    /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
    timestamp: Scalars['Timestamp']
    /** A field whose value exists in the standard IANA Time Zone Database. */
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
    node: EdgeNode
    __typename: string
}


/** This entity is accessible over an Edge connection. */
export interface EdgeNode {
    id: Scalars['ID']
    __typename: string
}


/** A file object to represent an managed file. */
export interface File {
    /** The description of the file. */
    description: (Scalars['String'] | null)
    /** The mime type of the file. */
    mime: (Scalars['String'] | null)
    /** The name of the file. */
    name: (Scalars['String'] | null)
    /** The size of the file in bytes. */
    size: Scalars['Int']
    /** The URL of the file. */
    url: Scalars['String']
    __typename: 'File'
}


/** A image object to represent an managed file. */
export interface Image {
    /** The alt text of the image. */
    alt: (Scalars['String'] | null)
    /** The height of the image. */
    height: Scalars['Int']
    /** The mime type of the image. */
    mime: (Scalars['String'] | null)
    /** The size of the image in bytes. */
    size: Scalars['Int']
    /** The title text of the image. */
    title: (Scalars['String'] | null)
    /** The URL of the image. */
    url: Scalars['String']
    /** Image variations control different sizes and formats for images. */
    variations: (ImageStyleDerivative[] | null)
    /** The width of the image. */
    width: Scalars['Int']
    __typename: 'Image'
}


/** Entity type image_style. */
export interface ImageStyle {
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    name: Scalars['String']
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


/** Entity type image_style. */
export type ImageStyleInterface = (ImageStyle) & { __isUnion?: true }


/** Entity type image_style. */
export type ImageStyleUnion = (ImageStyle) & { __isUnion?: true }


/** A language definition provided by the CMS. */
export interface Language {
    /** The language direction. */
    direction: (Scalars['String'] | null)
    /** The language code. */
    id: (Scalars['ID'] | null)
    /** The language name. */
    name: (Scalars['String'] | null)
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
    layout: (Layout | null)
    position: (LayoutParagraphsPosition | null)
    __typename: 'LayoutParagraphs'
}


/** This content has been arranged by a User using Layout Paragraphs. */
export type LayoutParagraphsInterface = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/** This component positionally belongs to another component's layout. */
export interface LayoutParagraphsPosition {
    /** The UUID of the component this component belongs to. */
    parentId: (Scalars['ID'] | null)
    /** There this component is suggested to live within the parent component's regions. */
    region: (Scalars['String'] | null)
    __typename: 'LayoutParagraphsPosition'
}


/** A link. */
export interface Link {
    /** Whether the link is internal to this website. */
    internal: Scalars['Boolean']
    /** The title of the link. */
    title: (Scalars['String'] | null)
    /** The URL of the link. */
    url: (Scalars['String'] | null)
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
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Language */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: Scalars['String']
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
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Language */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: Scalars['String']
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
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Image */
    image: Image
    /** Language */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: Scalars['String']
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
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Language */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    /** Video URL */
    url: Scalars['String']
    __typename: 'MediaRemoteVideo'
}


/** Entity type media. */
export type MediaUnion = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & { __isUnion?: true }


/** A locally hosted video file. */
export interface MediaVideo {
    /** The time the media item was last edited. */
    changed: DateTime
    /** The time the media item was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Language */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** Name */
    name: Scalars['String']
    /** URL alias */
    path: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    /** Video file */
    video: File
    __typename: 'MediaVideo'
}


/** Entity type menu. */
export interface Menu {
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The menu items. */
    items: MenuItem[]
    /** The menu name. */
    name: Scalars['String']
    __typename: 'Menu'
}


/** List of menus available to load. */
export type MenuAvailable = 'FOOTER' | 'MAIN'


/** Entity type menu. */
export type MenuInterface = (Menu) & { __isUnion?: true }


/** A menu item defined in the CMS. */
export interface MenuItem {
    /** Attributes of this menu item. */
    attributes: MenuItemAttributes
    /** Child menu items of this menu item. */
    children: MenuItem[]
    /** The description of the menu item. */
    description: (Scalars['String'] | null)
    /** Whether this menu item is intended to be expanded. */
    expanded: Scalars['Boolean']
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Whether this menu item links to an internal route. */
    internal: Scalars['Boolean']
    /** The route this menu item uses. Route loading can be disabled per menu type. */
    route: (RouteUnion | null)
    /** The title of the menu item. */
    title: Scalars['String']
    /** The URL of the menu item. */
    url: (Scalars['String'] | null)
    __typename: 'MenuItem'
}


/** Menu item options set within the CMS. */
export interface MenuItemAttributes {
    /** Menu item attribute class. */
    class: (Scalars['String'] | null)
    /** Menu item attribute id. */
    id: (Scalars['String'] | null)
    /** Menu item attribute target. */
    target: (Scalars['String'] | null)
    __typename: 'MenuItemAttributes'
}


/** Entity type menu. */
export type MenuUnion = (Menu) & { __isUnion?: true }


/** A meta tag element. */
export type MetaTag = (MetaTagLink | MetaTagProperty | MetaTagValue) & { __isUnion?: true }


/** This entity has meta tags enabled. */
export type MetaTagInterface = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo | NodePage | TermTags | User) & { __isUnion?: true }


/** A meta link element. */
export interface MetaTagLink {
    /** The meta tag element attributes. */
    attributes: MetaTagLinkAttributes
    /** The HTML tag for this meta element. */
    tag: Scalars['String']
    __typename: 'MetaTagLink'
}


/** A meta link element's attributes. */
export interface MetaTagLinkAttributes {
    /** The href attribute of the link. */
    href: (Scalars['String'] | null)
    /** The rel attribute of the link. */
    rel: (Scalars['String'] | null)
    __typename: 'MetaTagLinkAttributes'
}


/** A meta property element. */
export interface MetaTagProperty {
    /** The meta tag element attributes. */
    attributes: MetaTagPropertyAttributes
    /** The HTML tag for this meta element. */
    tag: Scalars['String']
    __typename: 'MetaTagProperty'
}


/** A meta property element's attributes. */
export interface MetaTagPropertyAttributes {
    /** The content attribute of the meta tag. */
    content: (Scalars['String'] | null)
    /** The property attribute of the meta tag. */
    property: (Scalars['String'] | null)
    __typename: 'MetaTagPropertyAttributes'
}


/** A meta tag element. */
export type MetaTagUnion = (MetaTagLink | MetaTagProperty | MetaTagValue) & { __isUnion?: true }


/** A meta content element. */
export interface MetaTagValue {
    /** The meta tag element attributes. */
    attributes: MetaTagValueAttributes
    /** The HTML tag for this meta element. */
    tag: Scalars['String']
    __typename: 'MetaTagValue'
}


/** A meta content element's attributes. */
export interface MetaTagValueAttributes {
    /** The content attribute of the meta tag. */
    content: (Scalars['String'] | null)
    /** The name attribute of the meta tag. */
    name: (Scalars['String'] | null)
    __typename: 'MetaTagValueAttributes'
}


/** A GraphQL mutation is a request that changes data on the server. */
export interface Mutation {
    /** Placeholder field to enable schema mutation extension. */
    _: Scalars['Boolean']
    __typename: 'Mutation'
}


/** Entity type node. */
export type NodeInterface = (NodePage) & { __isUnion?: true }


/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePage {
    /** The author of this content. */
    author: (User | null)
    /** The time that the node was last edited. */
    changed: DateTime
    /** Content */
    content: (ParagraphUnion[] | null)
    /** The time that the node was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
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


/** Entity type node. */
export type NodeUnion = (NodePage) & { __isUnion?: true }


/** Add an expanding and collapsing element. */
export interface ParagraphAccordion {
    /** Title */
    accordionTitle: Scalars['String']
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** Content */
    items: ParagraphUnion[]
    /** The paragraphs entity language code. */
    langcode: Language
    __typename: 'ParagraphAccordion'
}


/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlock {
    /** Block */
    block: (BlockUnion | null)
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    __typename: 'ParagraphBlock'
}


/** Add a title, text content with formatting and link. */
export interface ParagraphCallToAction {
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    /** Link */
    link: (Link | null)
    /** Text */
    text: (Text | null)
    /** Title */
    title: (Scalars['String'] | null)
    __typename: 'ParagraphCallToAction'
}


/** Entity type paragraph. */
export type ParagraphInterface = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMedia {
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** Description */
    description: (Text | null)
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    /** Media */
    media: MediaUnion
    /** Title */
    title: (Scalars['String'] | null)
    __typename: 'ParagraphMedia'
}


/** Add a quote. Add citation and citation link */
export interface ParagraphQuote {
    /** Give credit for the quote. */
    citation: (Scalars['String'] | null)
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    /** Enter an optional link for the citation. */
    link: (Link | null)
    /** Quote */
    quote: Text
    __typename: 'ParagraphQuote'
}


/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSection {
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    __typename: 'ParagraphSection'
}


/** Create a table with your own columns and rows. */
export interface ParagraphTable {
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    /** Table */
    table: Table
    /** Add a title to your block */
    title: (Scalars['String'] | null)
    __typename: 'ParagraphTable'
}


/** Text based content with formatting. */
export interface ParagraphText {
    /** Layout Paragraphs metadata for this paragraph. */
    composition: LayoutParagraphs
    /** The time that the Paragraph was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The paragraphs entity language code. */
    langcode: Language
    /** Text */
    text: Text
    __typename: 'ParagraphText'
}


/** Entity type paragraph. */
export type ParagraphUnion = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & { __isUnion?: true }


/**
 * The schema's entry-point for queries.
 * 
 * This acts as the public, top-level API from which all queries must start.
 */
export interface Query {
    /** Load a Block plugin. */
    block: (BlockUnion | null)
    /** Schema information. */
    info: SchemaInformation
    /** Load a Route by path. */
    menu: (Menu | null)
    /** Load a Route by path. */
    route: (RouteUnion | null)
    /** Get information about the currently authenticated user. NULL if not logged in. */
    viewer: (User | null)
    __typename: 'Query'
}


/** Routes represent incoming requests that resolve to content. */
export type Route = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = (NodePage) & { __isUnion?: true }


/** Route outside of this website. */
export interface RouteExternal {
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean']
    /** URL of this route. */
    url: Scalars['String']
    __typename: 'RouteExternal'
}


/** Route within this website. */
export interface RouteInternal {
    /** Breadcrumb links for this route. */
    breadcrumbs: (Link[] | null)
    /** Content assigned to this route. */
    entity: (RouteEntityUnion | null)
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean']
    /** URL of this route. */
    url: Scalars['String']
    __typename: 'RouteInternal'
}


/** Redirect to another URL with status. */
export interface RouteRedirect {
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean']
    /** Utility prop. Always true for redirects. */
    redirect: Scalars['Boolean']
    /** Suggested status for redirect. Eg 301. */
    status: Scalars['Int']
    /** URL of this route. */
    url: Scalars['String']
    __typename: 'RouteRedirect'
}


/** Route types that can exist in the system. */
export type RouteUnion = (RouteExternal | RouteInternal | RouteRedirect) & { __isUnion?: true }


/** Schema information provided by the system. */
export interface SchemaInformation {
    /** The schema description. */
    description: (Scalars['String'] | null)
    /** The internal path to the front page. */
    home: (Scalars['String'] | null)
    /** The schema version. */
    version: (Scalars['String'] | null)
    __typename: 'SchemaInformation'
}


/** Sort direction. */
export type SortDirection = 'ASC' | 'DESC'


/** A table field. */
export interface Table {
    /** The caption of the table. */
    caption: (Scalars['String'] | null)
    /** A text format associated with the row data. */
    format: (Scalars['String'] | null)
    /** The rows of the table. */
    rows: ((TableRow | null)[] | null)
    __typename: 'Table'
}


/** A row of a table field. */
export interface TableRow {
    /** The data of the row. */
    data: ((Scalars['String'] | null)[] | null)
    /** The weight of the row. */
    weight: (Scalars['Int'] | null)
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
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The term language code. */
    langcode: Language
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** Name */
    name: Scalars['String']
    /** The parents of this term. */
    parent: (TermUnion | null)
    /** URL alias */
    path: Scalars['String']
    /** Published */
    status: Scalars['Boolean']
    /** The weight of this term in relation to other terms. */
    weight: Scalars['Int']
    __typename: 'TermTags'
}


/** Entity type taxonomy_term. */
export type TermUnion = (TermTags) & { __isUnion?: true }


/** A processed text format defined by the CMS. */
export interface Text {
    /** The text format used to process the text value. */
    format: (Scalars['String'] | null)
    /** The processed text value. */
    processed: (Scalars['Html'] | null)
    /** The raw text value. */
    value: (Scalars['String'] | null)
    __typename: 'Text'
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummary {
    /** The text format used to process the text value. */
    format: (Scalars['String'] | null)
    /** The processed text value. */
    processed: (Scalars['Html'] | null)
    /** The processed text summary. */
    summary: (Scalars['Html'] | null)
    /** The raw text value. */
    value: (Scalars['String'] | null)
    __typename: 'TextSummary'
}


/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedType {
    /** Unsupported type, always TRUE. */
    unsupported: (Scalars['Boolean'] | null)
    __typename: 'UnsupportedType'
}


/** Entity type user. */
export interface User {
    /** The time that the user was last edited. */
    changed: DateTime
    /** The time that the user was created. */
    created: DateTime
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID']
    /** The email of this user. */
    mail: (Scalars['Email'] | null)
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[]
    /** The name of this user. */
    name: Scalars['String']
    /** The roles the user has. */
    roles: (Scalars['UserRoles'][] | null)
    /** Whether the user is active or blocked. */
    status: UserStatus
    __typename: 'User'
}


/** Entity type user. */
export type UserInterface = (User) & { __isUnion?: true }


/** Whether the user is active or blocked. */
export type UserStatus = 'ACTIVE' | 'BLOCKED'


/** Entity type user. */
export type UserUnion = (User) & { __isUnion?: true }


/** Views represent collections of curated data from the site. */
export interface View {
    /** The description of the view. */
    description: (Scalars['String'] | null)
    /** The machine name of the display. */
    display: Scalars['String']
    /** The ID of the view. */
    id: Scalars['ID']
    /** The human friendly label of the view. */
    label: (Scalars['String'] | null)
    /** The language code of the view. */
    langcode: (Scalars['String'] | null)
    /** Information about the page in the view. */
    pageInfo: ViewPageInfo
    /** The machine name of the view. */
    view: Scalars['String']
    __typename: string
}


/** Information about the page in a view. */
export interface ViewPageInfo {
    /** Any result offset being used. */
    offset: Scalars['Int']
    /** The current page being returned. */
    page: Scalars['Int']
    /** How many results per page. */
    pageSize: Scalars['Int']
    /** How many results total. */
    total: Scalars['Int']
    __typename: 'ViewPageInfo'
}


/** A reference to an embedded view */
export interface ViewReference {
    contextualFilter: (Scalars['String'][] | null)
    display: Scalars['String']
    pageSize: (Scalars['Int'] | null)
    /** The name of the query used to fetch the data, if the view is a GraphQL display. */
    query: (Scalars['String'] | null)
    view: Scalars['String']
    __typename: 'ViewReference'
}


/** All available view result types. */
export type ViewResultUnion = (UnsupportedType) & { __isUnion?: true }


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
    /** The code of the country. */
    code?: boolean | number
    /** The name of the country. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block content is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockContentGenqlSelection{
    /** The Content Block entity to be displayed within the block. */
    entity?: BlockContentUnionGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The rendered output of the block. */
    render?: boolean | number
    /** The title of the block if provided. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherTypeGenqlSelection{
    /** Body */
    body?: TextSummaryGenqlSelection
    /** The time that the content block was last edited. */
    changed?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The content block language code. */
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
    /** The time that the content block was last edited. */
    changed?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The content block language code. */
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
    /** The time that the content block was last edited. */
    changed?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The content block language code. */
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


/** Entity type block_content. */
export interface BlockContentUnionGenqlSelection{
    on_BlockContentAnotherType?:BlockContentAnotherTypeGenqlSelection,
    on_BlockContentBasicBlock?:BlockContentBasicBlockGenqlSelection,
    on_BlockContentInterface?: BlockContentInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Blocks are a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockInterfaceGenqlSelection{
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The rendered output of the block. */
    render?: boolean | number
    /** The title of the block if provided. */
    title?: boolean | number
    on_BlockContent?: BlockContentGenqlSelection
    on_BlockPlugin?: BlockPluginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A generic block plugin is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockPluginGenqlSelection{
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The rendered output of the block. */
    render?: boolean | number
    /** The title of the block if provided. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Block types that can exist in the system. */
export interface BlockUnionGenqlSelection{
    on_BlockContent?:BlockContentGenqlSelection,
    on_BlockPlugin?:BlockPluginGenqlSelection,
    on_BlockInterface?: BlockInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** A paginated set of results. */
export interface ConnectionGenqlSelection{
    /** The edges of this connection. */
    edges?: EdgeGenqlSelection
    /** The nodes of the edges of this connection. */
    nodes?: EdgeNodeGenqlSelection
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
    /** The end of the date range. */
    end?: DateTimeGenqlSelection
    /** The start of the date range. */
    start?: DateTimeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A DateTime object. */
export interface DateTimeGenqlSelection{
    /** A string that will have a value of format ±hh:mm */
    offset?: boolean | number
    /** RFC 3339 compliant time string. */
    time?: boolean | number
    /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
    timestamp?: boolean | number
    /** A field whose value exists in the standard IANA Time Zone Database. */
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
    node?: EdgeNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** This entity is accessible over an Edge connection. */
export interface EdgeNodeGenqlSelection{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A file object to represent an managed file. */
export interface FileGenqlSelection{
    /** The description of the file. */
    description?: boolean | number
    /** The mime type of the file. */
    mime?: boolean | number
    /** The name of the file. */
    name?: boolean | number
    /** The size of the file in bytes. */
    size?: boolean | number
    /** The URL of the file. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A image object to represent an managed file. */
export interface ImageGenqlSelection{
    /** The alt text of the image. */
    alt?: boolean | number
    /** The height of the image. */
    height?: boolean | number
    /** The mime type of the image. */
    mime?: boolean | number
    /** The size of the image in bytes. */
    size?: boolean | number
    /** The title text of the image. */
    title?: boolean | number
    /** The URL of the image. */
    url?: boolean | number
    /** Image variations control different sizes and formats for images. */
    variations?: (ImageStyleDerivativeGenqlSelection & { __args?: {styles?: ((ImageStyleAvailable | null)[] | null)} })
    /** The width of the image. */
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type image_style. */
export interface ImageStyleGenqlSelection{
    /** The Universally Unique IDentifier (UUID). */
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


/** Entity type image_style. */
export interface ImageStyleInterfaceGenqlSelection{
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    name?: boolean | number
    on_ImageStyle?: ImageStyleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type image_style. */
export interface ImageStyleUnionGenqlSelection{
    on_ImageStyle?:ImageStyleGenqlSelection,
    on_ImageStyleInterface?: ImageStyleInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Generic untyped input for key-value pairs. */
export interface KeyValueInput {key: Scalars['String'],value?: (Scalars['String'] | null)}


/** A language definition provided by the CMS. */
export interface LanguageGenqlSelection{
    /** The language direction. */
    direction?: boolean | number
    /** The language code. */
    id?: boolean | number
    /** The language name. */
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


/** This content has been arranged by a User using Layout Paragraphs. */
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
    /** The UUID of the component this component belongs to. */
    parentId?: boolean | number
    /** There this component is suggested to live within the parent component's regions. */
    region?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A link. */
export interface LinkGenqlSelection{
    /** Whether the link is internal to this website. */
    internal?: boolean | number
    /** The title of the link. */
    title?: boolean | number
    /** The URL of the link. */
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Image */
    image?: ImageGenqlSelection
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
    /** Published */
    status?: boolean | number
    /** Video URL */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type media. */
export interface MediaUnionGenqlSelection{
    on_MediaAudio?:MediaAudioGenqlSelection,
    on_MediaDocument?:MediaDocumentGenqlSelection,
    on_MediaImage?:MediaImageGenqlSelection,
    on_MediaRemoteVideo?:MediaRemoteVideoGenqlSelection,
    on_MediaVideo?:MediaVideoGenqlSelection,
    on_MediaInterface?: MediaInterfaceGenqlSelection,
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** A locally hosted video file. */
export interface MediaVideoGenqlSelection{
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Language */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** URL alias */
    path?: boolean | number
    /** Published */
    status?: boolean | number
    /** Video file */
    video?: FileGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type menu. */
export interface MenuGenqlSelection{
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The menu items. */
    items?: MenuItemGenqlSelection
    /** The menu name. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type menu. */
export interface MenuInterfaceGenqlSelection{
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The menu items. */
    items?: MenuItemGenqlSelection
    /** The menu name. */
    name?: boolean | number
    on_Menu?: MenuGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A menu item defined in the CMS. */
export interface MenuItemGenqlSelection{
    /** Attributes of this menu item. */
    attributes?: MenuItemAttributesGenqlSelection
    /** Child menu items of this menu item. */
    children?: MenuItemGenqlSelection
    /** The description of the menu item. */
    description?: boolean | number
    /** Whether this menu item is intended to be expanded. */
    expanded?: boolean | number
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Whether this menu item links to an internal route. */
    internal?: boolean | number
    /** The route this menu item uses. Route loading can be disabled per menu type. */
    route?: RouteUnionGenqlSelection
    /** The title of the menu item. */
    title?: boolean | number
    /** The URL of the menu item. */
    url?: boolean | number
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


/** Entity type menu. */
export interface MenuUnionGenqlSelection{
    on_Menu?:MenuGenqlSelection,
    on_MenuInterface?: MenuInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** A meta tag element. */
export interface MetaTagGenqlSelection{
    /** The HTML tag for this meta element. */
    tag?: boolean | number
    on_MetaTagLink?: MetaTagLinkGenqlSelection
    on_MetaTagProperty?: MetaTagPropertyGenqlSelection
    on_MetaTagValue?: MetaTagValueGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** This entity has meta tags enabled. */
export interface MetaTagInterfaceGenqlSelection{
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    on_MediaAudio?: MediaAudioGenqlSelection
    on_MediaDocument?: MediaDocumentGenqlSelection
    on_MediaImage?: MediaImageGenqlSelection
    on_MediaRemoteVideo?: MediaRemoteVideoGenqlSelection
    on_MediaVideo?: MediaVideoGenqlSelection
    on_NodePage?: NodePageGenqlSelection
    on_TermTags?: TermTagsGenqlSelection
    on_User?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A meta link element. */
export interface MetaTagLinkGenqlSelection{
    /** The meta tag element attributes. */
    attributes?: MetaTagLinkAttributesGenqlSelection
    /** The HTML tag for this meta element. */
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A meta link element's attributes. */
export interface MetaTagLinkAttributesGenqlSelection{
    /** The href attribute of the link. */
    href?: boolean | number
    /** The rel attribute of the link. */
    rel?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A meta property element. */
export interface MetaTagPropertyGenqlSelection{
    /** The meta tag element attributes. */
    attributes?: MetaTagPropertyAttributesGenqlSelection
    /** The HTML tag for this meta element. */
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A meta property element's attributes. */
export interface MetaTagPropertyAttributesGenqlSelection{
    /** The content attribute of the meta tag. */
    content?: boolean | number
    /** The property attribute of the meta tag. */
    property?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A meta tag element. */
export interface MetaTagUnionGenqlSelection{
    on_MetaTagLink?:MetaTagLinkGenqlSelection,
    on_MetaTagProperty?:MetaTagPropertyGenqlSelection,
    on_MetaTagValue?:MetaTagValueGenqlSelection,
    on_MetaTag?: MetaTagGenqlSelection,
    __typename?: boolean | number
}


/** A meta content element. */
export interface MetaTagValueGenqlSelection{
    /** The meta tag element attributes. */
    attributes?: MetaTagValueAttributesGenqlSelection
    /** The HTML tag for this meta element. */
    tag?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A meta content element's attributes. */
export interface MetaTagValueAttributesGenqlSelection{
    /** The content attribute of the meta tag. */
    content?: boolean | number
    /** The name attribute of the meta tag. */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A GraphQL mutation is a request that changes data on the server. */
export interface MutationGenqlSelection{
    /** Placeholder field to enable schema mutation extension. */
    _?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type node. */
export interface NodeInterfaceGenqlSelection{
    /** The author of this content. */
    author?: UserGenqlSelection
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time that the node was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
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
    /** The author of this content. */
    author?: UserGenqlSelection
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection
    /** Content */
    content?: ParagraphUnionGenqlSelection
    /** The time that the node was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
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


/** Entity type node. */
export interface NodeUnionGenqlSelection{
    on_NodePage?:NodePageGenqlSelection,
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection,
    on_NodeInterface?: NodeInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Add an expanding and collapsing element. */
export interface ParagraphAccordionGenqlSelection{
    /** Title */
    accordionTitle?: boolean | number
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** Content */
    items?: ParagraphUnionGenqlSelection
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlockGenqlSelection{
    /** Block */
    block?: BlockUnionGenqlSelection
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Add a title, text content with formatting and link. */
export interface ParagraphCallToActionGenqlSelection{
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
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
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** Description */
    description?: TextGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
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
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
    /** Enter an optional link for the citation. */
    link?: LinkGenqlSelection
    /** Quote */
    quote?: TextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSectionGenqlSelection{
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Create a table with your own columns and rows. */
export interface ParagraphTableGenqlSelection{
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
    /** Table */
    table?: TableGenqlSelection
    /** Add a title to your block */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Text based content with formatting. */
export interface ParagraphTextGenqlSelection{
    /** Layout Paragraphs metadata for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection
    /** Text */
    text?: TextGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type paragraph. */
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
    /** Block plugin ID. Eg page_title_block, block_content:uuid */
    id: Scalars['ID']} })
    /** Schema information. */
    info?: SchemaInformationGenqlSelection
    /** Load a Route by path. */
    menu?: (MenuGenqlSelection & { __args: {
    /** Internal menu name. Eg main */
    name: MenuAvailable} })
    /** Load a Route by path. */
    route?: (RouteUnionGenqlSelection & { __args: {
    /** Optionally filter the route by language. Eg en, ja, fr. */
    langcode?: (Scalars['String'] | null), 
    /** Internal path to load. Eg /about */
    path: Scalars['String']} })
    /** Get information about the currently authenticated user. NULL if not logged in. */
    viewer?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Routes represent incoming requests that resolve to content. */
export interface RouteGenqlSelection{
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** URL of this route. */
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
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection,
    on_NodeInterface?: NodeInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Route outside of this website. */
export interface RouteExternalGenqlSelection{
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** URL of this route. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Route within this website. */
export interface RouteInternalGenqlSelection{
    /** Breadcrumb links for this route. */
    breadcrumbs?: LinkGenqlSelection
    /** Content assigned to this route. */
    entity?: RouteEntityUnionGenqlSelection
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** URL of this route. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Redirect to another URL with status. */
export interface RouteRedirectGenqlSelection{
    /** Whether this route is internal or external. */
    internal?: boolean | number
    /** Utility prop. Always true for redirects. */
    redirect?: boolean | number
    /** Suggested status for redirect. Eg 301. */
    status?: boolean | number
    /** URL of this route. */
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


/** Schema information provided by the system. */
export interface SchemaInformationGenqlSelection{
    /** The schema description. */
    description?: boolean | number
    /** The internal path to the front page. */
    home?: boolean | number
    /** The schema version. */
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A table field. */
export interface TableGenqlSelection{
    /** The caption of the table. */
    caption?: boolean | number
    /** A text format associated with the row data. */
    format?: boolean | number
    /** The rows of the table. */
    rows?: TableRowGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A row of a table field. */
export interface TableRowGenqlSelection{
    /** The data of the row. */
    data?: boolean | number
    /** The weight of the row. */
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The term language code. */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** The parents of this term. */
    parent?: TermUnionGenqlSelection
    /** URL alias */
    path?: boolean | number
    /** Published */
    status?: boolean | number
    /** The weight of this term in relation to other terms. */
    weight?: boolean | number
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The term language code. */
    langcode?: LanguageGenqlSelection
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** Name */
    name?: boolean | number
    /** The parents of this term. */
    parent?: TermUnionGenqlSelection
    /** URL alias */
    path?: boolean | number
    /** Published */
    status?: boolean | number
    /** The weight of this term in relation to other terms. */
    weight?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type taxonomy_term. */
export interface TermUnionGenqlSelection{
    on_TermTags?:TermTagsGenqlSelection,
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection,
    on_TermInterface?: TermInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** A processed text format defined by the CMS. */
export interface TextGenqlSelection{
    /** The text format used to process the text value. */
    format?: boolean | number
    /** The processed text value. */
    processed?: boolean | number
    /** The raw text value. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A processed text format with summary defined by the CMS. */
export interface TextSummaryGenqlSelection{
    /** The text format used to process the text value. */
    format?: boolean | number
    /** The processed text value. */
    processed?: boolean | number
    /** The processed text summary. */
    summary?: boolean | number
    /** The raw text value. */
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
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The email of this user. */
    mail?: boolean | number
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
    /** The name of this user. */
    name?: boolean | number
    /** The roles the user has. */
    roles?: boolean | number
    /** Whether the user is active or blocked. */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Entity type user. */
export interface UserInterfaceGenqlSelection{
    /** The time that the user was last edited. */
    changed?: DateTimeGenqlSelection
    /** The time that the user was created. */
    created?: DateTimeGenqlSelection
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number
    /** The email of this user. */
    mail?: boolean | number
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection
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


/** Entity type user. */
export interface UserUnionGenqlSelection{
    on_User?:UserGenqlSelection,
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection,
    on_UserInterface?: UserInterfaceGenqlSelection,
    __typename?: boolean | number
}


/** Views represent collections of curated data from the site. */
export interface ViewGenqlSelection{
    /** The description of the view. */
    description?: boolean | number
    /** The machine name of the display. */
    display?: boolean | number
    /** The ID of the view. */
    id?: boolean | number
    /** The human friendly label of the view. */
    label?: boolean | number
    /** The language code of the view. */
    langcode?: boolean | number
    /** Information about the page in the view. */
    pageInfo?: ViewPageInfoGenqlSelection
    /** The machine name of the view. */
    view?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about the page in a view. */
export interface ViewPageInfoGenqlSelection{
    /** Any result offset being used. */
    offset?: boolean | number
    /** The current page being returned. */
    page?: boolean | number
    /** How many results per page. */
    pageSize?: boolean | number
    /** How many results total. */
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A reference to an embedded view */
export interface ViewReferenceGenqlSelection{
    contextualFilter?: boolean | number
    display?: boolean | number
    pageSize?: boolean | number
    /** The name of the query used to fetch the data, if the view is a GraphQL display. */
    query?: boolean | number
    view?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** All available view result types. */
export interface ViewResultUnionGenqlSelection{
    on_UnsupportedType?:UnsupportedTypeGenqlSelection,
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
    


    const BlockInterface_possibleTypes: string[] = ['BlockContent','BlockPlugin']
    export const isBlockInterface = (obj?: { __typename?: any } | null): obj is BlockInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBlockInterface"')
      return BlockInterface_possibleTypes.includes(obj.__typename)
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
    


    const EdgeNode_possibleTypes: string[] = []
    export const isEdgeNode = (obj?: { __typename?: any } | null): obj is EdgeNode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEdgeNode"')
      return EdgeNode_possibleTypes.includes(obj.__typename)
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
    


    const ImageStyleInterface_possibleTypes: string[] = ['ImageStyle']
    export const isImageStyleInterface = (obj?: { __typename?: any } | null): obj is ImageStyleInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isImageStyleInterface"')
      return ImageStyleInterface_possibleTypes.includes(obj.__typename)
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
    


    const MenuInterface_possibleTypes: string[] = ['Menu']
    export const isMenuInterface = (obj?: { __typename?: any } | null): obj is MenuInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuInterface"')
      return MenuInterface_possibleTypes.includes(obj.__typename)
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
    


    const MetaTagInterface_possibleTypes: string[] = ['MediaAudio','MediaDocument','MediaImage','MediaRemoteVideo','MediaVideo','NodePage','TermTags','User']
    export const isMetaTagInterface = (obj?: { __typename?: any } | null): obj is MetaTagInterface => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetaTagInterface"')
      return MetaTagInterface_possibleTypes.includes(obj.__typename)
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
    


    const View_possibleTypes: string[] = []
    export const isView = (obj?: { __typename?: any } | null): obj is View => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isView"')
      return View_possibleTypes.includes(obj.__typename)
    }
    


    const ViewPageInfo_possibleTypes: string[] = ['ViewPageInfo']
    export const isViewPageInfo = (obj?: { __typename?: any } | null): obj is ViewPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isViewPageInfo"')
      return ViewPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ViewReference_possibleTypes: string[] = ['ViewReference']
    export const isViewReference = (obj?: { __typename?: any } | null): obj is ViewReference => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isViewReference"')
      return ViewReference_possibleTypes.includes(obj.__typename)
    }
    


    const ViewResultUnion_possibleTypes: string[] = ['UnsupportedType']
    export const isViewResultUnion = (obj?: { __typename?: any } | null): obj is ViewResultUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isViewResultUnion"')
      return ViewResultUnion_possibleTypes.includes(obj.__typename)
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

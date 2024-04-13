export type Scalars = {
    Boolean: boolean;
    Email: any;
    Float: number;
    Html: any;
    ID: string;
    Int: number;
    PhoneNumber: any;
    String: string;
    Time: any;
    TimeZone: any;
    Timestamp: any;
    UntypedStructuredData: any;
    UtcOffset: any;
    _: any;
};
/** Complex address data. */
export interface Address {
    additionalName: (Scalars['String'] | null);
    addressLine1: (Scalars['String'] | null);
    addressLine2: (Scalars['String'] | null);
    administrativeArea: (Scalars['String'] | null);
    country: (AddressCountry | null);
    dependentLocality: (Scalars['String'] | null);
    familyName: (Scalars['String'] | null);
    givenName: (Scalars['String'] | null);
    langcode: (Scalars['String'] | null);
    locality: (Scalars['String'] | null);
    organization: (Scalars['String'] | null);
    postalCode: (Scalars['String'] | null);
    sortingCode: (Scalars['String'] | null);
    __typename: 'Address';
}
/** Address country. */
export interface AddressCountry {
    /** The code of the country. */
    code: (Scalars['String'] | null);
    /** The name of the country. */
    name: (Scalars['String'] | null);
    __typename: 'AddressCountry';
}
/** Block content is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockContent {
    /** The Content Block entity to be displayed within the block. */
    entity: BlockContentUnion;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The rendered output of the block. */
    render: (Scalars['Html'] | null);
    /** The title of the block if provided. */
    title: (Scalars['String'] | null);
    __typename: 'BlockContent';
}
/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherType {
    /** Body */
    body: (TextSummary | null);
    /** The time that the content block was last edited. */
    changed: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The content block language code. */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** A boolean indicating whether this block is reusable. */
    reusable: Scalars['Boolean'];
    /** A brief description of your block. */
    title: Scalars['String'];
    __typename: 'BlockContentAnotherType';
}
/** A basic block with a title and content. */
export interface BlockContentBasicBlock {
    /** Body */
    body: (TextSummary | null);
    /** The time that the content block was last edited. */
    changed: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The content block language code. */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** A boolean indicating whether this block is reusable. */
    reusable: Scalars['Boolean'];
    /** A brief description of your block. */
    title: Scalars['String'];
    __typename: 'BlockContentBasicBlock';
}
/** Entity type block_content. */
export type BlockContentInterface = (BlockContentAnotherType | BlockContentBasicBlock) & {
    __isUnion?: true;
};
/** Entity type block_content. */
export type BlockContentUnion = (BlockContentAnotherType | BlockContentBasicBlock) & {
    __isUnion?: true;
};
/** Blocks are a modular piece of content that can be displayed in various regions of a website's layout. */
export type BlockInterface = (BlockContent | BlockPlugin) & {
    __isUnion?: true;
};
/** A generic block plugin is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockPlugin {
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The rendered output of the block. */
    render: (Scalars['Html'] | null);
    /** The title of the block if provided. */
    title: (Scalars['String'] | null);
    __typename: 'BlockPlugin';
}
/** Block types that can exist in the system. */
export type BlockUnion = (BlockContent | BlockPlugin) & {
    __isUnion?: true;
};
/** A Date range has a start and an end. */
export interface DateRange {
    /** The end of the date range. */
    end: (DateTime | null);
    /** The start of the date range. */
    start: (DateTime | null);
    __typename: 'DateRange';
}
/** A DateTime object. */
export interface DateTime {
    /** A string that will have a value of format ±hh:mm */
    offset: Scalars['UtcOffset'];
    /** RFC 3339 compliant time string. */
    time: Scalars['Time'];
    /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
    timestamp: Scalars['Timestamp'];
    /** A field whose value exists in the standard IANA Time Zone Database. */
    timezone: Scalars['TimeZone'];
    __typename: 'DateTime';
}
/** A file object to represent an managed file. */
export interface File {
    /** The description of the file. */
    description: (Scalars['String'] | null);
    /** The mime type of the file. */
    mime: (Scalars['String'] | null);
    /** The name of the file. */
    name: (Scalars['String'] | null);
    /** The size of the file in bytes. */
    size: Scalars['Int'];
    /** The URL of the file. */
    url: Scalars['String'];
    __typename: 'File';
}
/** A image object to represent an managed file. */
export interface Image {
    /** The alt text of the image. */
    alt: (Scalars['String'] | null);
    /** The height of the image. */
    height: Scalars['Int'];
    /** The mime type of the image. */
    mime: (Scalars['String'] | null);
    /** The size of the image in bytes. */
    size: Scalars['Int'];
    /** The title text of the image. */
    title: (Scalars['String'] | null);
    /** The URL of the image. */
    url: Scalars['String'];
    /** Image variations control different sizes and formats for images. */
    variations: (ImageStyleDerivative[] | null);
    /** The width of the image. */
    width: Scalars['Int'];
    __typename: 'Image';
}
/** Entity type image_style. */
export interface ImageStyle {
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    name: Scalars['String'];
    __typename: 'ImageStyle';
}
/** List of image styles available to use. */
export type ImageStyleAvailable = 'LARGE' | 'LARGE2X' | 'MEDIUM' | 'MEDIUM2X' | 'THUMBNAIL' | 'WIDE' | 'WIDE2X';
/** ImageStyle derivatives for an Image. */
export interface ImageStyleDerivative {
    height: Scalars['Int'];
    name: Scalars['String'];
    url: Scalars['String'];
    width: Scalars['Int'];
    __typename: 'ImageStyleDerivative';
}
/** Entity type image_style. */
export type ImageStyleInterface = (ImageStyle) & {
    __isUnion?: true;
};
/** Entity type image_style. */
export type ImageStyleUnion = (ImageStyle) & {
    __isUnion?: true;
};
/** A language definition provided by the CMS. */
export interface Language {
    /** The language direction. */
    direction: (Scalars['String'] | null);
    /** The language code. */
    id: (Scalars['ID'] | null);
    /** The language name. */
    name: (Scalars['String'] | null);
    __typename: 'Language';
}
/** A layout defined by the CMS. */
export interface Layout {
    /** Human readable category of the layout definition. */
    category: Scalars['String'];
    /** A default region as fallback for convenience. */
    defaultRegion: Scalars['String'];
    /** Machine readable name of the layout definition. */
    id: Scalars['ID'];
    /** Human readable name of the layout definition. */
    label: Scalars['String'];
    /** Regions represent where a User can place content within the CMS. */
    regions: Scalars['String'][];
    __typename: 'Layout';
}
/** If this component has been designed by a User extra information will be available here. */
export interface LayoutParagraphs {
    /** The layout definition for this component. */
    layout: (Layout | null);
    /** Detail on where this component is suggested to be placed within the parent component. */
    position: (LayoutParagraphsPosition | null);
    __typename: 'LayoutParagraphs';
}
/** This content has been arranged using Layout Paragraphs. */
export type LayoutParagraphsInterface = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & {
    __isUnion?: true;
};
/** This component positionally belongs to another component's layout. */
export interface LayoutParagraphsPosition {
    /** The UUID of the parent component this component belongs to. */
    parentId: (Scalars['ID'] | null);
    /** Where this component is suggested to be places within the parent component's regions. */
    region: (Scalars['String'] | null);
    __typename: 'LayoutParagraphsPosition';
}
/** A link. */
export interface Link {
    /** Whether the link is internal to this website. */
    internal: Scalars['Boolean'];
    /** The title of the link. */
    title: (Scalars['String'] | null);
    /** The URL of the link. */
    url: (Scalars['String'] | null);
    __typename: 'Link';
}
/** A locally hosted audio file. */
export interface MediaAudio {
    /** Audio file */
    audio: File;
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'MediaAudio';
}
/** An uploaded file or document, such as a PDF. */
export interface MediaDocument {
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** Document */
    document: File;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'MediaDocument';
}
/** Use local images for reusable media. */
export interface MediaImage {
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Image */
    image: Image;
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'MediaImage';
}
/** Entity type media. */
export type MediaInterface = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & {
    __isUnion?: true;
};
/** A remotely hosted video from YouTube or Vimeo. */
export interface MediaRemoteVideo {
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
    /** Video URL */
    url: Scalars['String'];
    __typename: 'MediaRemoteVideo';
}
/** Entity type media. */
export type MediaUnion = (MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo) & {
    __isUnion?: true;
};
/** A locally hosted video file. */
export interface MediaVideo {
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
    /** Video file */
    video: File;
    __typename: 'MediaVideo';
}
/** Entity type menu. */
export interface Menu {
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The menu items. */
    items: MenuItem[];
    /** The menu name. */
    name: Scalars['String'];
    __typename: 'Menu';
}
/** List of menus available to load. */
export type MenuAvailable = 'FOOTER' | 'MAIN';
/** Entity type menu. */
export type MenuInterface = (Menu) & {
    __isUnion?: true;
};
/** A menu item defined in the CMS. */
export interface MenuItem {
    /** Attributes of this menu item. */
    attributes: MenuItemAttributes;
    /** Child menu items of this menu item. */
    children: MenuItem[];
    /** The description of the menu item. */
    description: (Scalars['String'] | null);
    /** Whether this menu item is intended to be expanded. */
    expanded: Scalars['Boolean'];
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Whether this menu item links to an internal route. */
    internal: Scalars['Boolean'];
    /** The language of the menu item. */
    langcode: Language;
    /** The route this menu item uses. Route loading can be disabled per menu type. */
    route: (RouteUnion | null);
    /** The title of the menu item. */
    title: Scalars['String'];
    /** The URL of the menu item. */
    url: (Scalars['String'] | null);
    __typename: 'MenuItem';
}
/** Menu item options set within the CMS. */
export interface MenuItemAttributes {
    /** Menu item attribute class. */
    class: (Scalars['String'] | null);
    /** Menu item attribute id. */
    id: (Scalars['String'] | null);
    /** Menu item attribute target. */
    target: (Scalars['String'] | null);
    __typename: 'MenuItemAttributes';
}
/** Entity type menu. */
export type MenuUnion = (Menu) & {
    __isUnion?: true;
};
/** A meta tag element. */
export type MetaTag = (MetaTagLink | MetaTagProperty | MetaTagScript | MetaTagValue) & {
    __isUnion?: true;
};
/** This entity has meta tags enabled. */
export type MetaTagInterface = (BlockContentAnotherType | BlockContentBasicBlock | MediaAudio | MediaDocument | MediaImage | MediaRemoteVideo | MediaVideo | NodePage | TermTag) & {
    __isUnion?: true;
};
/** A meta link element. */
export interface MetaTagLink {
    /** The meta tag element attributes. */
    attributes: MetaTagLinkAttributes;
    /** The HTML tag for this meta element. */
    tag: Scalars['String'];
    __typename: 'MetaTagLink';
}
/** A meta link element's attributes. */
export interface MetaTagLinkAttributes {
    /** Specifies the location of the linked document. */
    href: (Scalars['String'] | null);
    /** Specifies the location of the linked document. */
    hreflang: (Scalars['String'] | null);
    /** Specifies on what device the linked document will be displayed. */
    media: (Scalars['String'] | null);
    /** Specifies the relationship between the current document and the linked document. */
    rel: (Scalars['String'] | null);
    /** Specifies the size of the linked resource. Only for rel="icon". */
    sizes: (Scalars['String'] | null);
    /** Specifies the media type of the linked document. */
    type: (Scalars['String'] | null);
    __typename: 'MetaTagLinkAttributes';
}
/** A meta property element. */
export interface MetaTagProperty {
    /** The meta tag element attributes. */
    attributes: MetaTagPropertyAttributes;
    /** The HTML tag for this meta element. */
    tag: Scalars['String'];
    __typename: 'MetaTagProperty';
}
/** A meta property element's attributes. */
export interface MetaTagPropertyAttributes {
    /** The content attribute of the meta tag. */
    content: (Scalars['String'] | null);
    /** The property attribute of the meta tag. */
    property: (Scalars['String'] | null);
    __typename: 'MetaTagPropertyAttributes';
}
/** A meta script element. */
export interface MetaTagScript {
    /** The meta tag element attributes. */
    attributes: MetaTagScriptAttributes;
    /** The content of the script tag. */
    content: (Scalars['String'] | null);
    /** The HTML tag for this meta element. */
    tag: Scalars['String'];
    __typename: 'MetaTagScript';
}
/** A meta script element's attributes. */
export interface MetaTagScriptAttributes {
    /** The integrity attribute of the script tag. */
    integrity: (Scalars['String'] | null);
    /** The src attribute of the script tag. */
    src: (Scalars['String'] | null);
    /** The type attribute of the script tag. */
    type: (Scalars['String'] | null);
    __typename: 'MetaTagScriptAttributes';
}
/** A meta tag element. */
export type MetaTagUnion = (MetaTagLink | MetaTagProperty | MetaTagScript | MetaTagValue) & {
    __isUnion?: true;
};
/** A meta content element. */
export interface MetaTagValue {
    /** The meta tag element attributes. */
    attributes: MetaTagValueAttributes;
    /** The HTML tag for this meta element. */
    tag: Scalars['String'];
    __typename: 'MetaTagValue';
}
/** A meta content element's attributes. */
export interface MetaTagValueAttributes {
    /** The content attribute of the meta tag. */
    content: (Scalars['String'] | null);
    /** The name attribute of the meta tag. */
    name: (Scalars['String'] | null);
    __typename: 'MetaTagValueAttributes';
}
/** A GraphQL mutation is a request that changes data on the server. */
export interface Mutation {
    /** Placeholder field to enable schema mutation extension. */
    _: Scalars['Boolean'];
    __typename: 'Mutation';
}
/** Entity type node. */
export type NodeInterface = (NodePage) & {
    __isUnion?: true;
};
/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePage {
    /** The time that the node was last edited. */
    changed: DateTime;
    /** Content */
    content: (ParagraphUnion[] | null);
    /** The date and time that the content was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** URL alias */
    path: Scalars['String'];
    /** Promoted to front page */
    promote: Scalars['Boolean'];
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Title */
    title: Scalars['String'];
    __typename: 'NodePage';
}
/** Entity type node. */
export type NodeUnion = (NodePage) & {
    __isUnion?: true;
};
/** Add an expanding and collapsing element. */
export interface ParagraphAccordion {
    /** Title */
    accordionTitle: Scalars['String'];
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Content */
    items: ParagraphUnion[];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'ParagraphAccordion';
}
/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlock {
    /** Block */
    block: (BlockUnion | null);
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'ParagraphBlock';
}
/** Add a title, text content with formatting and link. */
export interface ParagraphCallToAction {
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Link */
    link: (Link | null);
    /** Published */
    status: Scalars['Boolean'];
    /** Text */
    text: (Text | null);
    /** Title */
    title: (Scalars['String'] | null);
    __typename: 'ParagraphCallToAction';
}
/** Entity type paragraph. */
export type ParagraphInterface = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & {
    __isUnion?: true;
};
/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMedia {
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** Description */
    description: (Text | null);
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Media */
    media: MediaUnion;
    /** Published */
    status: Scalars['Boolean'];
    /** Title */
    title: (Scalars['String'] | null);
    __typename: 'ParagraphMedia';
}
/** Add a quote. Add citation and citation link */
export interface ParagraphQuote {
    /** Give credit for the quote. */
    citation: (Scalars['String'] | null);
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Enter an optional link for the citation. */
    link: (Link | null);
    /** Quote */
    quote: Text;
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'ParagraphQuote';
}
/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSection {
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Published */
    status: Scalars['Boolean'];
    __typename: 'ParagraphSection';
}
/** Create a table with your own columns and rows. */
export interface ParagraphTable {
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Published */
    status: Scalars['Boolean'];
    /** Table */
    table: Table;
    /** Add a title to your block */
    title: (Scalars['String'] | null);
    __typename: 'ParagraphTable';
}
/** Text based content with formatting. */
export interface ParagraphText {
    /** The layout information for this paragraph. */
    composition: LayoutParagraphs;
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The paragraphs entity language code. */
    langcode: Language;
    /** Published */
    status: Scalars['Boolean'];
    /** Text */
    text: Text;
    __typename: 'ParagraphText';
}
/** Entity type paragraph. */
export type ParagraphUnion = (ParagraphAccordion | ParagraphBlock | ParagraphCallToAction | ParagraphMedia | ParagraphQuote | ParagraphSection | ParagraphTable | ParagraphText) & {
    __isUnion?: true;
};
/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface Query {
    /** Load a Block plugin. */
    block: (BlockUnion | null);
    /** Schema information. */
    info: SchemaInformation;
    /** Load a Menu by name. */
    menu: (Menu | null);
    /** Load a Route by path. */
    route: (RouteUnion | null);
    __typename: 'Query';
}
/** Routes represent incoming requests that resolve to content. */
export type Route = (RouteExternal | RouteInternal | RouteRedirect) & {
    __isUnion?: true;
};
/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = (NodePage) & {
    __isUnion?: true;
};
/** Route outside of this website. */
export interface RouteExternal {
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean'];
    /** URL of this route. */
    url: Scalars['String'];
    __typename: 'RouteExternal';
}
/** Route within this website. */
export interface RouteInternal {
    /** Breadcrumb links for this route. */
    breadcrumbs: (Link[] | null);
    /** Content assigned to this route. */
    entity: (RouteEntityUnion | null);
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean'];
    /** URL of this route. */
    url: Scalars['String'];
    __typename: 'RouteInternal';
}
/** Redirect to another URL with status. */
export interface RouteRedirect {
    /** Whether this route is internal or external. */
    internal: Scalars['Boolean'];
    /** Utility prop. Always true for redirects. */
    redirect: Scalars['Boolean'];
    /** Suggested status for redirect. Eg 301. */
    status: Scalars['Int'];
    /** URL of this route. */
    url: Scalars['String'];
    __typename: 'RouteRedirect';
}
/** Route types that can exist in the system. */
export type RouteUnion = (RouteExternal | RouteInternal | RouteRedirect) & {
    __isUnion?: true;
};
/** Schema information provided by the system. */
export interface SchemaInformation {
    /** The schema description. */
    description: (Scalars['String'] | null);
    /** The internal path to the front page. */
    home: (Scalars['String'] | null);
    /** The schema version. */
    version: (Scalars['String'] | null);
    __typename: 'SchemaInformation';
}
/** Sort direction. */
export type SortDirection = 'ASC' | 'DESC';
/** A table field. */
export interface Table {
    /** The caption of the table. */
    caption: (Scalars['String'] | null);
    /** A text format associated with the row data. */
    format: (Scalars['String'] | null);
    /** The rows of the table. */
    rows: ((TableRow | null)[] | null);
    __typename: 'Table';
}
/** A row of a table field. */
export interface TableRow {
    /** The data of the row. */
    data: ((Scalars['String'] | null)[] | null);
    /** The weight of the row. */
    weight: (Scalars['Int'] | null);
    __typename: 'TableRow';
}
/** Entity type taxonomy_term. */
export type TermInterface = (TermTag) & {
    __isUnion?: true;
};
/** Tags */
export interface TermTag {
    /** The time that the term was last edited. */
    changed: DateTime;
    /** Description */
    description: Text;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The term language code. */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: MetaTagUnion[];
    /** Name */
    name: Scalars['String'];
    /** The parents of this term. */
    parent: (TermUnion | null);
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
    /** The weight of this term in relation to other terms. */
    weight: Scalars['Int'];
    __typename: 'TermTag';
}
/** Entity type taxonomy_term. */
export type TermUnion = (TermTag) & {
    __isUnion?: true;
};
/** A processed text format defined by the CMS. */
export interface Text {
    /** The text format used to process the text value. */
    format: (Scalars['String'] | null);
    /** The processed text value. */
    processed: (Scalars['Html'] | null);
    /** The raw text value. */
    value: (Scalars['String'] | null);
    __typename: 'Text';
}
/** A processed text format with summary defined by the CMS. */
export interface TextSummary {
    /** The text format used to process the text value. */
    format: (Scalars['String'] | null);
    /** The processed text value. */
    processed: (Scalars['Html'] | null);
    /** The processed text summary. */
    summary: (Scalars['Html'] | null);
    /** The raw text value. */
    value: (Scalars['String'] | null);
    __typename: 'TextSummary';
}
/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedType {
    /** Unsupported type, always TRUE. */
    unsupported: (Scalars['Boolean'] | null);
    __typename: 'UnsupportedType';
}
/** Views represent collections of curated data from the CMS. */
export interface View {
    /** The description of the view. */
    description: (Scalars['String'] | null);
    /** The machine name of the display. */
    display: Scalars['String'];
    /** The ID of the view. */
    id: Scalars['ID'];
    /** The human friendly label of the view. */
    label: (Scalars['String'] | null);
    /** The language code of the view. */
    langcode: (Scalars['String'] | null);
    /** Information about the page in the view. */
    pageInfo: ViewPageInfo;
    /** The machine name of the view. */
    view: Scalars['String'];
    __typename: string;
}
/** Information about the page in a view. */
export interface ViewPageInfo {
    /** Any result offset being used. */
    offset: Scalars['Int'];
    /** The current page being returned. */
    page: Scalars['Int'];
    /** How many results per page. */
    pageSize: Scalars['Int'];
    /** How many results total. */
    total: Scalars['Int'];
    __typename: 'ViewPageInfo';
}
/** A reference to an embedded view */
export interface ViewReference {
    contextualFilter: (Scalars['String'][] | null);
    display: Scalars['String'];
    pageSize: (Scalars['Int'] | null);
    /** The name of the query used to fetch the data, if the view is a GraphQL display. */
    query: (Scalars['String'] | null);
    view: Scalars['String'];
    __typename: 'ViewReference';
}
/** All available view result types. */
export type ViewResultUnion = (UnsupportedType) & {
    __isUnion?: true;
};
/** Complex address data. */
export interface AddressGenqlSelection {
    additionalName?: boolean | number;
    addressLine1?: boolean | number;
    addressLine2?: boolean | number;
    administrativeArea?: boolean | number;
    country?: AddressCountryGenqlSelection;
    dependentLocality?: boolean | number;
    familyName?: boolean | number;
    givenName?: boolean | number;
    langcode?: boolean | number;
    locality?: boolean | number;
    organization?: boolean | number;
    postalCode?: boolean | number;
    sortingCode?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Address country. */
export interface AddressCountryGenqlSelection {
    /** The code of the country. */
    code?: boolean | number;
    /** The name of the country. */
    name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Block content is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockContentGenqlSelection {
    /** The Content Block entity to be displayed within the block. */
    entity?: BlockContentUnionGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The rendered output of the block. */
    render?: boolean | number;
    /** The title of the block if provided. */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Another example block type for testing of Unions in GraphQL. */
export interface BlockContentAnotherTypeGenqlSelection {
    /** Body */
    body?: TextSummaryGenqlSelection;
    /** The time that the content block was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The content block language code. */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** A boolean indicating whether this block is reusable. */
    reusable?: boolean | number;
    /** A brief description of your block. */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A basic block with a title and content. */
export interface BlockContentBasicBlockGenqlSelection {
    /** Body */
    body?: TextSummaryGenqlSelection;
    /** The time that the content block was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The content block language code. */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** A boolean indicating whether this block is reusable. */
    reusable?: boolean | number;
    /** A brief description of your block. */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type block_content. */
export interface BlockContentInterfaceGenqlSelection {
    /** The time that the content block was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The content block language code. */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** A boolean indicating whether this block is reusable. */
    reusable?: boolean | number;
    /** A brief description of your block. */
    title?: boolean | number;
    on_BlockContentAnotherType?: BlockContentAnotherTypeGenqlSelection;
    on_BlockContentBasicBlock?: BlockContentBasicBlockGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type block_content. */
export interface BlockContentUnionGenqlSelection {
    on_BlockContentAnotherType?: BlockContentAnotherTypeGenqlSelection;
    on_BlockContentBasicBlock?: BlockContentBasicBlockGenqlSelection;
    on_BlockContentInterface?: BlockContentInterfaceGenqlSelection;
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** Blocks are a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockInterfaceGenqlSelection {
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The rendered output of the block. */
    render?: boolean | number;
    /** The title of the block if provided. */
    title?: boolean | number;
    on_BlockContent?: BlockContentGenqlSelection;
    on_BlockPlugin?: BlockPluginGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A generic block plugin is a modular piece of content that can be displayed in various regions of a website's layout. */
export interface BlockPluginGenqlSelection {
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The rendered output of the block. */
    render?: boolean | number;
    /** The title of the block if provided. */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Block types that can exist in the system. */
export interface BlockUnionGenqlSelection {
    on_BlockContent?: BlockContentGenqlSelection;
    on_BlockPlugin?: BlockPluginGenqlSelection;
    on_BlockInterface?: BlockInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** A Date range has a start and an end. */
export interface DateRangeGenqlSelection {
    /** The end of the date range. */
    end?: DateTimeGenqlSelection;
    /** The start of the date range. */
    start?: DateTimeGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A DateTime object. */
export interface DateTimeGenqlSelection {
    /** A string that will have a value of format ±hh:mm */
    offset?: boolean | number;
    /** RFC 3339 compliant time string. */
    time?: boolean | number;
    /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
    timestamp?: boolean | number;
    /** A field whose value exists in the standard IANA Time Zone Database. */
    timezone?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A file object to represent an managed file. */
export interface FileGenqlSelection {
    /** The description of the file. */
    description?: boolean | number;
    /** The mime type of the file. */
    mime?: boolean | number;
    /** The name of the file. */
    name?: boolean | number;
    /** The size of the file in bytes. */
    size?: boolean | number;
    /** The URL of the file. */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A image object to represent an managed file. */
export interface ImageGenqlSelection {
    /** The alt text of the image. */
    alt?: boolean | number;
    /** The height of the image. */
    height?: boolean | number;
    /** The mime type of the image. */
    mime?: boolean | number;
    /** The size of the image in bytes. */
    size?: boolean | number;
    /** The title text of the image. */
    title?: boolean | number;
    /** The URL of the image. */
    url?: boolean | number;
    /** Image variations control different sizes and formats for images. */
    variations?: (ImageStyleDerivativeGenqlSelection & {
        __args?: {
            styles?: ((ImageStyleAvailable | null)[] | null);
        };
    });
    /** The width of the image. */
    width?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type image_style. */
export interface ImageStyleGenqlSelection {
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** ImageStyle derivatives for an Image. */
export interface ImageStyleDerivativeGenqlSelection {
    height?: boolean | number;
    name?: boolean | number;
    url?: boolean | number;
    width?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type image_style. */
export interface ImageStyleInterfaceGenqlSelection {
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    name?: boolean | number;
    on_ImageStyle?: ImageStyleGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type image_style. */
export interface ImageStyleUnionGenqlSelection {
    on_ImageStyle?: ImageStyleGenqlSelection;
    on_ImageStyleInterface?: ImageStyleInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** Generic untyped input for key-value pairs. */
export interface KeyValueInput {
    key: Scalars['String'];
    value?: (Scalars['String'] | null);
}
/** A language definition provided by the CMS. */
export interface LanguageGenqlSelection {
    /** The language direction. */
    direction?: boolean | number;
    /** The language code. */
    id?: boolean | number;
    /** The language name. */
    name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A layout defined by the CMS. */
export interface LayoutGenqlSelection {
    /** Human readable category of the layout definition. */
    category?: boolean | number;
    /** A default region as fallback for convenience. */
    defaultRegion?: boolean | number;
    /** Machine readable name of the layout definition. */
    id?: boolean | number;
    /** Human readable name of the layout definition. */
    label?: boolean | number;
    /** Regions represent where a User can place content within the CMS. */
    regions?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** If this component has been designed by a User extra information will be available here. */
export interface LayoutParagraphsGenqlSelection {
    /** The layout definition for this component. */
    layout?: LayoutGenqlSelection;
    /** Detail on where this component is suggested to be placed within the parent component. */
    position?: LayoutParagraphsPositionGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** This content has been arranged using Layout Paragraphs. */
export interface LayoutParagraphsInterfaceGenqlSelection {
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    on_ParagraphAccordion?: ParagraphAccordionGenqlSelection;
    on_ParagraphBlock?: ParagraphBlockGenqlSelection;
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection;
    on_ParagraphMedia?: ParagraphMediaGenqlSelection;
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection;
    on_ParagraphSection?: ParagraphSectionGenqlSelection;
    on_ParagraphTable?: ParagraphTableGenqlSelection;
    on_ParagraphText?: ParagraphTextGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** This component positionally belongs to another component's layout. */
export interface LayoutParagraphsPositionGenqlSelection {
    /** The UUID of the parent component this component belongs to. */
    parentId?: boolean | number;
    /** Where this component is suggested to be places within the parent component's regions. */
    region?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A link. */
export interface LinkGenqlSelection {
    /** Whether the link is internal to this website. */
    internal?: boolean | number;
    /** The title of the link. */
    title?: boolean | number;
    /** The URL of the link. */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A locally hosted audio file. */
export interface MediaAudioGenqlSelection {
    /** Audio file */
    audio?: FileGenqlSelection;
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** An uploaded file or document, such as a PDF. */
export interface MediaDocumentGenqlSelection {
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection;
    /** Document */
    document?: FileGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Use local images for reusable media. */
export interface MediaImageGenqlSelection {
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Image */
    image?: ImageGenqlSelection;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type media. */
export interface MediaInterfaceGenqlSelection {
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    on_MediaAudio?: MediaAudioGenqlSelection;
    on_MediaDocument?: MediaDocumentGenqlSelection;
    on_MediaImage?: MediaImageGenqlSelection;
    on_MediaRemoteVideo?: MediaRemoteVideoGenqlSelection;
    on_MediaVideo?: MediaVideoGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A remotely hosted video from YouTube or Vimeo. */
export interface MediaRemoteVideoGenqlSelection {
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    /** Video URL */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type media. */
export interface MediaUnionGenqlSelection {
    on_MediaAudio?: MediaAudioGenqlSelection;
    on_MediaDocument?: MediaDocumentGenqlSelection;
    on_MediaImage?: MediaImageGenqlSelection;
    on_MediaRemoteVideo?: MediaRemoteVideoGenqlSelection;
    on_MediaVideo?: MediaVideoGenqlSelection;
    on_MediaInterface?: MediaInterfaceGenqlSelection;
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** A locally hosted video file. */
export interface MediaVideoGenqlSelection {
    /** The time the media item was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The time the media item was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    /** Video file */
    video?: FileGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type menu. */
export interface MenuGenqlSelection {
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The menu items. */
    items?: MenuItemGenqlSelection;
    /** The menu name. */
    name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type menu. */
export interface MenuInterfaceGenqlSelection {
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The menu items. */
    items?: MenuItemGenqlSelection;
    /** The menu name. */
    name?: boolean | number;
    on_Menu?: MenuGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A menu item defined in the CMS. */
export interface MenuItemGenqlSelection {
    /** Attributes of this menu item. */
    attributes?: MenuItemAttributesGenqlSelection;
    /** Child menu items of this menu item. */
    children?: MenuItemGenqlSelection;
    /** The description of the menu item. */
    description?: boolean | number;
    /** Whether this menu item is intended to be expanded. */
    expanded?: boolean | number;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Whether this menu item links to an internal route. */
    internal?: boolean | number;
    /** The language of the menu item. */
    langcode?: LanguageGenqlSelection;
    /** The route this menu item uses. Route loading can be disabled per menu type. */
    route?: RouteUnionGenqlSelection;
    /** The title of the menu item. */
    title?: boolean | number;
    /** The URL of the menu item. */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Menu item options set within the CMS. */
export interface MenuItemAttributesGenqlSelection {
    /** Menu item attribute class. */
    class?: boolean | number;
    /** Menu item attribute id. */
    id?: boolean | number;
    /** Menu item attribute target. */
    target?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type menu. */
export interface MenuUnionGenqlSelection {
    on_Menu?: MenuGenqlSelection;
    on_MenuInterface?: MenuInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** A meta tag element. */
export interface MetaTagGenqlSelection {
    /** The HTML tag for this meta element. */
    tag?: boolean | number;
    on_MetaTagLink?: MetaTagLinkGenqlSelection;
    on_MetaTagProperty?: MetaTagPropertyGenqlSelection;
    on_MetaTagScript?: MetaTagScriptGenqlSelection;
    on_MetaTagValue?: MetaTagValueGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** This entity has meta tags enabled. */
export interface MetaTagInterfaceGenqlSelection {
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    on_BlockContentAnotherType?: BlockContentAnotherTypeGenqlSelection;
    on_BlockContentBasicBlock?: BlockContentBasicBlockGenqlSelection;
    on_MediaAudio?: MediaAudioGenqlSelection;
    on_MediaDocument?: MediaDocumentGenqlSelection;
    on_MediaImage?: MediaImageGenqlSelection;
    on_MediaRemoteVideo?: MediaRemoteVideoGenqlSelection;
    on_MediaVideo?: MediaVideoGenqlSelection;
    on_NodePage?: NodePageGenqlSelection;
    on_TermTag?: TermTagGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta link element. */
export interface MetaTagLinkGenqlSelection {
    /** The meta tag element attributes. */
    attributes?: MetaTagLinkAttributesGenqlSelection;
    /** The HTML tag for this meta element. */
    tag?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta link element's attributes. */
export interface MetaTagLinkAttributesGenqlSelection {
    /** Specifies the location of the linked document. */
    href?: boolean | number;
    /** Specifies the location of the linked document. */
    hreflang?: boolean | number;
    /** Specifies on what device the linked document will be displayed. */
    media?: boolean | number;
    /** Specifies the relationship between the current document and the linked document. */
    rel?: boolean | number;
    /** Specifies the size of the linked resource. Only for rel="icon". */
    sizes?: boolean | number;
    /** Specifies the media type of the linked document. */
    type?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta property element. */
export interface MetaTagPropertyGenqlSelection {
    /** The meta tag element attributes. */
    attributes?: MetaTagPropertyAttributesGenqlSelection;
    /** The HTML tag for this meta element. */
    tag?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta property element's attributes. */
export interface MetaTagPropertyAttributesGenqlSelection {
    /** The content attribute of the meta tag. */
    content?: boolean | number;
    /** The property attribute of the meta tag. */
    property?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta script element. */
export interface MetaTagScriptGenqlSelection {
    /** The meta tag element attributes. */
    attributes?: MetaTagScriptAttributesGenqlSelection;
    /** The content of the script tag. */
    content?: boolean | number;
    /** The HTML tag for this meta element. */
    tag?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta script element's attributes. */
export interface MetaTagScriptAttributesGenqlSelection {
    /** The integrity attribute of the script tag. */
    integrity?: boolean | number;
    /** The src attribute of the script tag. */
    src?: boolean | number;
    /** The type attribute of the script tag. */
    type?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta tag element. */
export interface MetaTagUnionGenqlSelection {
    on_MetaTagLink?: MetaTagLinkGenqlSelection;
    on_MetaTagProperty?: MetaTagPropertyGenqlSelection;
    on_MetaTagScript?: MetaTagScriptGenqlSelection;
    on_MetaTagValue?: MetaTagValueGenqlSelection;
    on_MetaTag?: MetaTagGenqlSelection;
    __typename?: boolean | number;
}
/** A meta content element. */
export interface MetaTagValueGenqlSelection {
    /** The meta tag element attributes. */
    attributes?: MetaTagValueAttributesGenqlSelection;
    /** The HTML tag for this meta element. */
    tag?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A meta content element's attributes. */
export interface MetaTagValueAttributesGenqlSelection {
    /** The content attribute of the meta tag. */
    content?: boolean | number;
    /** The name attribute of the meta tag. */
    name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A GraphQL mutation is a request that changes data on the server. */
export interface MutationGenqlSelection {
    /** Placeholder field to enable schema mutation extension. */
    _?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type node. */
export interface NodeInterfaceGenqlSelection {
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection;
    /** The date and time that the content was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** URL alias */
    path?: boolean | number;
    /** Promoted to front page */
    promote?: boolean | number;
    /** Published */
    status?: boolean | number;
    /** Sticky at top of lists */
    sticky?: boolean | number;
    /** Title */
    title?: boolean | number;
    on_NodePage?: NodePageGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export interface NodePageGenqlSelection {
    /** The time that the node was last edited. */
    changed?: DateTimeGenqlSelection;
    /** Content */
    content?: ParagraphUnionGenqlSelection;
    /** The date and time that the content was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Language */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** URL alias */
    path?: boolean | number;
    /** Promoted to front page */
    promote?: boolean | number;
    /** Published */
    status?: boolean | number;
    /** Sticky at top of lists */
    sticky?: boolean | number;
    /** Title */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type node. */
export interface NodeUnionGenqlSelection {
    on_NodePage?: NodePageGenqlSelection;
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection;
    on_NodeInterface?: NodeInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** Add an expanding and collapsing element. */
export interface ParagraphAccordionGenqlSelection {
    /** Title */
    accordionTitle?: boolean | number;
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** Content */
    items?: ParagraphUnionGenqlSelection;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Choose a block to display. Edit this fields settings to allow different blocks. */
export interface ParagraphBlockGenqlSelection {
    /** Block */
    block?: BlockUnionGenqlSelection;
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Add a title, text content with formatting and link. */
export interface ParagraphCallToActionGenqlSelection {
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Link */
    link?: LinkGenqlSelection;
    /** Published */
    status?: boolean | number;
    /** Text */
    text?: TextGenqlSelection;
    /** Title */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type paragraph. */
export interface ParagraphInterfaceGenqlSelection {
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Published */
    status?: boolean | number;
    on_ParagraphAccordion?: ParagraphAccordionGenqlSelection;
    on_ParagraphBlock?: ParagraphBlockGenqlSelection;
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection;
    on_ParagraphMedia?: ParagraphMediaGenqlSelection;
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection;
    on_ParagraphSection?: ParagraphSectionGenqlSelection;
    on_ParagraphTable?: ParagraphTableGenqlSelection;
    on_ParagraphText?: ParagraphTextGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Add Audio, Documents, Images or Videos and Embed YouTube videos. */
export interface ParagraphMediaGenqlSelection {
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** Description */
    description?: TextGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Media */
    media?: MediaUnionGenqlSelection;
    /** Published */
    status?: boolean | number;
    /** Title */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Add a quote. Add citation and citation link */
export interface ParagraphQuoteGenqlSelection {
    /** Give credit for the quote. */
    citation?: boolean | number;
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Enter an optional link for the citation. */
    link?: LinkGenqlSelection;
    /** Quote */
    quote?: TextGenqlSelection;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Sections are layout containers with composition for embedding more components. */
export interface ParagraphSectionGenqlSelection {
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Published */
    status?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Create a table with your own columns and rows. */
export interface ParagraphTableGenqlSelection {
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Published */
    status?: boolean | number;
    /** Table */
    table?: TableGenqlSelection;
    /** Add a title to your block */
    title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Text based content with formatting. */
export interface ParagraphTextGenqlSelection {
    /** The layout information for this paragraph. */
    composition?: LayoutParagraphsGenqlSelection;
    /** The time that the Paragraph was created. */
    created?: DateTimeGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The paragraphs entity language code. */
    langcode?: LanguageGenqlSelection;
    /** Published */
    status?: boolean | number;
    /** Text */
    text?: TextGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type paragraph. */
export interface ParagraphUnionGenqlSelection {
    on_ParagraphAccordion?: ParagraphAccordionGenqlSelection;
    on_ParagraphBlock?: ParagraphBlockGenqlSelection;
    on_ParagraphCallToAction?: ParagraphCallToActionGenqlSelection;
    on_ParagraphMedia?: ParagraphMediaGenqlSelection;
    on_ParagraphQuote?: ParagraphQuoteGenqlSelection;
    on_ParagraphSection?: ParagraphSectionGenqlSelection;
    on_ParagraphTable?: ParagraphTableGenqlSelection;
    on_ParagraphText?: ParagraphTextGenqlSelection;
    on_LayoutParagraphsInterface?: LayoutParagraphsInterfaceGenqlSelection;
    on_ParagraphInterface?: ParagraphInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export interface QueryGenqlSelection {
    /** Load a Block plugin. */
    block?: (BlockUnionGenqlSelection & {
        __args: {
            /** Block plugin ID. Eg page_title_block, block_content:uuid */
            id: Scalars['ID'];
        };
    });
    /** Schema information. */
    info?: SchemaInformationGenqlSelection;
    /** Load a Menu by name. */
    menu?: (MenuGenqlSelection & {
        __args: {
            /** Internal menu name. Eg MAIN */
            name: MenuAvailable;
        };
    });
    /** Load a Route by path. */
    route?: (RouteUnionGenqlSelection & {
        __args: {
            /** Internal path to load. Eg /about */
            path: Scalars['String'];
        };
    });
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Routes represent incoming requests that resolve to content. */
export interface RouteGenqlSelection {
    /** Whether this route is internal or external. */
    internal?: boolean | number;
    /** URL of this route. */
    url?: boolean | number;
    on_RouteExternal?: RouteExternalGenqlSelection;
    on_RouteInternal?: RouteInternalGenqlSelection;
    on_RouteRedirect?: RouteRedirectGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A list of possible entities that can be returned by URL. */
export interface RouteEntityUnionGenqlSelection {
    on_NodePage?: NodePageGenqlSelection;
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection;
    on_NodeInterface?: NodeInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** Route outside of this website. */
export interface RouteExternalGenqlSelection {
    /** Whether this route is internal or external. */
    internal?: boolean | number;
    /** URL of this route. */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Route within this website. */
export interface RouteInternalGenqlSelection {
    /** Breadcrumb links for this route. */
    breadcrumbs?: LinkGenqlSelection;
    /** Content assigned to this route. */
    entity?: RouteEntityUnionGenqlSelection;
    /** Whether this route is internal or external. */
    internal?: boolean | number;
    /** URL of this route. */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Redirect to another URL with status. */
export interface RouteRedirectGenqlSelection {
    /** Whether this route is internal or external. */
    internal?: boolean | number;
    /** Utility prop. Always true for redirects. */
    redirect?: boolean | number;
    /** Suggested status for redirect. Eg 301. */
    status?: boolean | number;
    /** URL of this route. */
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Route types that can exist in the system. */
export interface RouteUnionGenqlSelection {
    on_RouteExternal?: RouteExternalGenqlSelection;
    on_RouteInternal?: RouteInternalGenqlSelection;
    on_RouteRedirect?: RouteRedirectGenqlSelection;
    on_Route?: RouteGenqlSelection;
    __typename?: boolean | number;
}
/** Schema information provided by the system. */
export interface SchemaInformationGenqlSelection {
    /** The schema description. */
    description?: boolean | number;
    /** The internal path to the front page. */
    home?: boolean | number;
    /** The schema version. */
    version?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A table field. */
export interface TableGenqlSelection {
    /** The caption of the table. */
    caption?: boolean | number;
    /** A text format associated with the row data. */
    format?: boolean | number;
    /** The rows of the table. */
    rows?: TableRowGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A row of a table field. */
export interface TableRowGenqlSelection {
    /** The data of the row. */
    data?: boolean | number;
    /** The weight of the row. */
    weight?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type taxonomy_term. */
export interface TermInterfaceGenqlSelection {
    /** The time that the term was last edited. */
    changed?: DateTimeGenqlSelection;
    /** Description */
    description?: TextGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The term language code. */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** The parents of this term. */
    parent?: TermUnionGenqlSelection;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    /** The weight of this term in relation to other terms. */
    weight?: boolean | number;
    on_TermTag?: TermTagGenqlSelection;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Tags */
export interface TermTagGenqlSelection {
    /** The time that the term was last edited. */
    changed?: DateTimeGenqlSelection;
    /** Description */
    description?: TextGenqlSelection;
    /** The Universally Unique IDentifier (UUID). */
    id?: boolean | number;
    /** The term language code. */
    langcode?: LanguageGenqlSelection;
    /** The computed meta tags for the entity. */
    metatag?: MetaTagUnionGenqlSelection;
    /** Name */
    name?: boolean | number;
    /** The parents of this term. */
    parent?: TermUnionGenqlSelection;
    /** URL alias */
    path?: boolean | number;
    /** Published */
    status?: boolean | number;
    /** The weight of this term in relation to other terms. */
    weight?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Entity type taxonomy_term. */
export interface TermUnionGenqlSelection {
    on_TermTag?: TermTagGenqlSelection;
    on_MetaTagInterface?: MetaTagInterfaceGenqlSelection;
    on_TermInterface?: TermInterfaceGenqlSelection;
    __typename?: boolean | number;
}
/** A processed text format defined by the CMS. */
export interface TextGenqlSelection {
    /** The text format used to process the text value. */
    format?: boolean | number;
    /** The processed text value. */
    processed?: boolean | number;
    /** The raw text value. */
    value?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A processed text format with summary defined by the CMS. */
export interface TextSummaryGenqlSelection {
    /** The text format used to process the text value. */
    format?: boolean | number;
    /** The processed text value. */
    processed?: boolean | number;
    /** The processed text summary. */
    summary?: boolean | number;
    /** The raw text value. */
    value?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export interface UnsupportedTypeGenqlSelection {
    /** Unsupported type, always TRUE. */
    unsupported?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Views represent collections of curated data from the CMS. */
export interface ViewGenqlSelection {
    /** The description of the view. */
    description?: boolean | number;
    /** The machine name of the display. */
    display?: boolean | number;
    /** The ID of the view. */
    id?: boolean | number;
    /** The human friendly label of the view. */
    label?: boolean | number;
    /** The language code of the view. */
    langcode?: boolean | number;
    /** Information about the page in the view. */
    pageInfo?: ViewPageInfoGenqlSelection;
    /** The machine name of the view. */
    view?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Information about the page in a view. */
export interface ViewPageInfoGenqlSelection {
    /** Any result offset being used. */
    offset?: boolean | number;
    /** The current page being returned. */
    page?: boolean | number;
    /** How many results per page. */
    pageSize?: boolean | number;
    /** How many results total. */
    total?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** A reference to an embedded view */
export interface ViewReferenceGenqlSelection {
    contextualFilter?: boolean | number;
    display?: boolean | number;
    pageSize?: boolean | number;
    /** The name of the query used to fetch the data, if the view is a GraphQL display. */
    query?: boolean | number;
    view?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** All available view result types. */
export interface ViewResultUnionGenqlSelection {
    on_UnsupportedType?: UnsupportedTypeGenqlSelection;
    __typename?: boolean | number;
}
export declare const isAddress: (obj?: {
    __typename?: any;
} | null) => obj is Address;
export declare const isAddressCountry: (obj?: {
    __typename?: any;
} | null) => obj is AddressCountry;
export declare const isBlockContent: (obj?: {
    __typename?: any;
} | null) => obj is BlockContent;
export declare const isBlockContentAnotherType: (obj?: {
    __typename?: any;
} | null) => obj is BlockContentAnotherType;
export declare const isBlockContentBasicBlock: (obj?: {
    __typename?: any;
} | null) => obj is BlockContentBasicBlock;
export declare const isBlockContentInterface: (obj?: {
    __typename?: any;
} | null) => obj is BlockContentInterface;
export declare const isBlockContentUnion: (obj?: {
    __typename?: any;
} | null) => obj is BlockContentUnion;
export declare const isBlockInterface: (obj?: {
    __typename?: any;
} | null) => obj is BlockInterface;
export declare const isBlockPlugin: (obj?: {
    __typename?: any;
} | null) => obj is BlockPlugin;
export declare const isBlockUnion: (obj?: {
    __typename?: any;
} | null) => obj is BlockUnion;
export declare const isDateRange: (obj?: {
    __typename?: any;
} | null) => obj is DateRange;
export declare const isDateTime: (obj?: {
    __typename?: any;
} | null) => obj is DateTime;
export declare const isFile: (obj?: {
    __typename?: any;
} | null) => obj is File;
export declare const isImage: (obj?: {
    __typename?: any;
} | null) => obj is Image;
export declare const isImageStyle: (obj?: {
    __typename?: any;
} | null) => obj is ImageStyle;
export declare const isImageStyleDerivative: (obj?: {
    __typename?: any;
} | null) => obj is ImageStyleDerivative;
export declare const isImageStyleInterface: (obj?: {
    __typename?: any;
} | null) => obj is ImageStyleInterface;
export declare const isImageStyleUnion: (obj?: {
    __typename?: any;
} | null) => obj is ImageStyleUnion;
export declare const isLanguage: (obj?: {
    __typename?: any;
} | null) => obj is Language;
export declare const isLayout: (obj?: {
    __typename?: any;
} | null) => obj is Layout;
export declare const isLayoutParagraphs: (obj?: {
    __typename?: any;
} | null) => obj is LayoutParagraphs;
export declare const isLayoutParagraphsInterface: (obj?: {
    __typename?: any;
} | null) => obj is LayoutParagraphsInterface;
export declare const isLayoutParagraphsPosition: (obj?: {
    __typename?: any;
} | null) => obj is LayoutParagraphsPosition;
export declare const isLink: (obj?: {
    __typename?: any;
} | null) => obj is Link;
export declare const isMediaAudio: (obj?: {
    __typename?: any;
} | null) => obj is MediaAudio;
export declare const isMediaDocument: (obj?: {
    __typename?: any;
} | null) => obj is MediaDocument;
export declare const isMediaImage: (obj?: {
    __typename?: any;
} | null) => obj is MediaImage;
export declare const isMediaInterface: (obj?: {
    __typename?: any;
} | null) => obj is MediaInterface;
export declare const isMediaRemoteVideo: (obj?: {
    __typename?: any;
} | null) => obj is MediaRemoteVideo;
export declare const isMediaUnion: (obj?: {
    __typename?: any;
} | null) => obj is MediaUnion;
export declare const isMediaVideo: (obj?: {
    __typename?: any;
} | null) => obj is MediaVideo;
export declare const isMenu: (obj?: {
    __typename?: any;
} | null) => obj is Menu;
export declare const isMenuInterface: (obj?: {
    __typename?: any;
} | null) => obj is MenuInterface;
export declare const isMenuItem: (obj?: {
    __typename?: any;
} | null) => obj is MenuItem;
export declare const isMenuItemAttributes: (obj?: {
    __typename?: any;
} | null) => obj is MenuItemAttributes;
export declare const isMenuUnion: (obj?: {
    __typename?: any;
} | null) => obj is MenuUnion;
export declare const isMetaTag: (obj?: {
    __typename?: any;
} | null) => obj is MetaTag;
export declare const isMetaTagInterface: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagInterface;
export declare const isMetaTagLink: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagLink;
export declare const isMetaTagLinkAttributes: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagLinkAttributes;
export declare const isMetaTagProperty: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagProperty;
export declare const isMetaTagPropertyAttributes: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagPropertyAttributes;
export declare const isMetaTagScript: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagScript;
export declare const isMetaTagScriptAttributes: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagScriptAttributes;
export declare const isMetaTagUnion: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagUnion;
export declare const isMetaTagValue: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagValue;
export declare const isMetaTagValueAttributes: (obj?: {
    __typename?: any;
} | null) => obj is MetaTagValueAttributes;
export declare const isMutation: (obj?: {
    __typename?: any;
} | null) => obj is Mutation;
export declare const isNodeInterface: (obj?: {
    __typename?: any;
} | null) => obj is NodeInterface;
export declare const isNodePage: (obj?: {
    __typename?: any;
} | null) => obj is NodePage;
export declare const isNodeUnion: (obj?: {
    __typename?: any;
} | null) => obj is NodeUnion;
export declare const isParagraphAccordion: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphAccordion;
export declare const isParagraphBlock: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphBlock;
export declare const isParagraphCallToAction: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphCallToAction;
export declare const isParagraphInterface: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphInterface;
export declare const isParagraphMedia: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphMedia;
export declare const isParagraphQuote: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphQuote;
export declare const isParagraphSection: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphSection;
export declare const isParagraphTable: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphTable;
export declare const isParagraphText: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphText;
export declare const isParagraphUnion: (obj?: {
    __typename?: any;
} | null) => obj is ParagraphUnion;
export declare const isQuery: (obj?: {
    __typename?: any;
} | null) => obj is Query;
export declare const isRoute: (obj?: {
    __typename?: any;
} | null) => obj is Route;
export declare const isRouteEntityUnion: (obj?: {
    __typename?: any;
} | null) => obj is RouteEntityUnion;
export declare const isRouteExternal: (obj?: {
    __typename?: any;
} | null) => obj is RouteExternal;
export declare const isRouteInternal: (obj?: {
    __typename?: any;
} | null) => obj is RouteInternal;
export declare const isRouteRedirect: (obj?: {
    __typename?: any;
} | null) => obj is RouteRedirect;
export declare const isRouteUnion: (obj?: {
    __typename?: any;
} | null) => obj is RouteUnion;
export declare const isSchemaInformation: (obj?: {
    __typename?: any;
} | null) => obj is SchemaInformation;
export declare const isTable: (obj?: {
    __typename?: any;
} | null) => obj is Table;
export declare const isTableRow: (obj?: {
    __typename?: any;
} | null) => obj is TableRow;
export declare const isTermInterface: (obj?: {
    __typename?: any;
} | null) => obj is TermInterface;
export declare const isTermTag: (obj?: {
    __typename?: any;
} | null) => obj is TermTag;
export declare const isTermUnion: (obj?: {
    __typename?: any;
} | null) => obj is TermUnion;
export declare const isText: (obj?: {
    __typename?: any;
} | null) => obj is Text;
export declare const isTextSummary: (obj?: {
    __typename?: any;
} | null) => obj is TextSummary;
export declare const isUnsupportedType: (obj?: {
    __typename?: any;
} | null) => obj is UnsupportedType;
export declare const isView: (obj?: {
    __typename?: any;
} | null) => obj is View;
export declare const isViewPageInfo: (obj?: {
    __typename?: any;
} | null) => obj is ViewPageInfo;
export declare const isViewReference: (obj?: {
    __typename?: any;
} | null) => obj is ViewReference;
export declare const isViewResultUnion: (obj?: {
    __typename?: any;
} | null) => obj is ViewResultUnion;
export declare const enumImageStyleAvailable: {
    LARGE: "LARGE";
    LARGE2X: "LARGE2X";
    MEDIUM: "MEDIUM";
    MEDIUM2X: "MEDIUM2X";
    THUMBNAIL: "THUMBNAIL";
    WIDE: "WIDE";
    WIDE2X: "WIDE2X";
};
export declare const enumMenuAvailable: {
    FOOTER: "FOOTER";
    MAIN: "MAIN";
};
export declare const enumSortDirection: {
    ASC: "ASC";
    DESC: "DESC";
};

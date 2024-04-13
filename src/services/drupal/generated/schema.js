// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
const Address_possibleTypes = ['Address'];
export const isAddress = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isAddress"');
    return Address_possibleTypes.includes(obj.__typename);
};
const AddressCountry_possibleTypes = ['AddressCountry'];
export const isAddressCountry = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isAddressCountry"');
    return AddressCountry_possibleTypes.includes(obj.__typename);
};
const BlockContent_possibleTypes = ['BlockContent'];
export const isBlockContent = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockContent"');
    return BlockContent_possibleTypes.includes(obj.__typename);
};
const BlockContentAnotherType_possibleTypes = ['BlockContentAnotherType'];
export const isBlockContentAnotherType = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockContentAnotherType"');
    return BlockContentAnotherType_possibleTypes.includes(obj.__typename);
};
const BlockContentBasicBlock_possibleTypes = ['BlockContentBasicBlock'];
export const isBlockContentBasicBlock = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockContentBasicBlock"');
    return BlockContentBasicBlock_possibleTypes.includes(obj.__typename);
};
const BlockContentInterface_possibleTypes = ['BlockContentAnotherType', 'BlockContentBasicBlock'];
export const isBlockContentInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockContentInterface"');
    return BlockContentInterface_possibleTypes.includes(obj.__typename);
};
const BlockContentUnion_possibleTypes = ['BlockContentAnotherType', 'BlockContentBasicBlock'];
export const isBlockContentUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockContentUnion"');
    return BlockContentUnion_possibleTypes.includes(obj.__typename);
};
const BlockInterface_possibleTypes = ['BlockContent', 'BlockPlugin'];
export const isBlockInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockInterface"');
    return BlockInterface_possibleTypes.includes(obj.__typename);
};
const BlockPlugin_possibleTypes = ['BlockPlugin'];
export const isBlockPlugin = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockPlugin"');
    return BlockPlugin_possibleTypes.includes(obj.__typename);
};
const BlockUnion_possibleTypes = ['BlockContent', 'BlockPlugin'];
export const isBlockUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isBlockUnion"');
    return BlockUnion_possibleTypes.includes(obj.__typename);
};
const DateRange_possibleTypes = ['DateRange'];
export const isDateRange = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isDateRange"');
    return DateRange_possibleTypes.includes(obj.__typename);
};
const DateTime_possibleTypes = ['DateTime'];
export const isDateTime = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isDateTime"');
    return DateTime_possibleTypes.includes(obj.__typename);
};
const File_possibleTypes = ['File'];
export const isFile = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isFile"');
    return File_possibleTypes.includes(obj.__typename);
};
const Image_possibleTypes = ['Image'];
export const isImage = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isImage"');
    return Image_possibleTypes.includes(obj.__typename);
};
const ImageStyle_possibleTypes = ['ImageStyle'];
export const isImageStyle = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isImageStyle"');
    return ImageStyle_possibleTypes.includes(obj.__typename);
};
const ImageStyleDerivative_possibleTypes = ['ImageStyleDerivative'];
export const isImageStyleDerivative = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isImageStyleDerivative"');
    return ImageStyleDerivative_possibleTypes.includes(obj.__typename);
};
const ImageStyleInterface_possibleTypes = ['ImageStyle'];
export const isImageStyleInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isImageStyleInterface"');
    return ImageStyleInterface_possibleTypes.includes(obj.__typename);
};
const ImageStyleUnion_possibleTypes = ['ImageStyle'];
export const isImageStyleUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isImageStyleUnion"');
    return ImageStyleUnion_possibleTypes.includes(obj.__typename);
};
const Language_possibleTypes = ['Language'];
export const isLanguage = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isLanguage"');
    return Language_possibleTypes.includes(obj.__typename);
};
const Layout_possibleTypes = ['Layout'];
export const isLayout = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isLayout"');
    return Layout_possibleTypes.includes(obj.__typename);
};
const LayoutParagraphs_possibleTypes = ['LayoutParagraphs'];
export const isLayoutParagraphs = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isLayoutParagraphs"');
    return LayoutParagraphs_possibleTypes.includes(obj.__typename);
};
const LayoutParagraphsInterface_possibleTypes = ['ParagraphAccordion', 'ParagraphBlock', 'ParagraphCallToAction', 'ParagraphMedia', 'ParagraphQuote', 'ParagraphSection', 'ParagraphTable', 'ParagraphText'];
export const isLayoutParagraphsInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isLayoutParagraphsInterface"');
    return LayoutParagraphsInterface_possibleTypes.includes(obj.__typename);
};
const LayoutParagraphsPosition_possibleTypes = ['LayoutParagraphsPosition'];
export const isLayoutParagraphsPosition = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isLayoutParagraphsPosition"');
    return LayoutParagraphsPosition_possibleTypes.includes(obj.__typename);
};
const Link_possibleTypes = ['Link'];
export const isLink = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isLink"');
    return Link_possibleTypes.includes(obj.__typename);
};
const MediaAudio_possibleTypes = ['MediaAudio'];
export const isMediaAudio = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaAudio"');
    return MediaAudio_possibleTypes.includes(obj.__typename);
};
const MediaDocument_possibleTypes = ['MediaDocument'];
export const isMediaDocument = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaDocument"');
    return MediaDocument_possibleTypes.includes(obj.__typename);
};
const MediaImage_possibleTypes = ['MediaImage'];
export const isMediaImage = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaImage"');
    return MediaImage_possibleTypes.includes(obj.__typename);
};
const MediaInterface_possibleTypes = ['MediaAudio', 'MediaDocument', 'MediaImage', 'MediaRemoteVideo', 'MediaVideo'];
export const isMediaInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaInterface"');
    return MediaInterface_possibleTypes.includes(obj.__typename);
};
const MediaRemoteVideo_possibleTypes = ['MediaRemoteVideo'];
export const isMediaRemoteVideo = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaRemoteVideo"');
    return MediaRemoteVideo_possibleTypes.includes(obj.__typename);
};
const MediaUnion_possibleTypes = ['MediaAudio', 'MediaDocument', 'MediaImage', 'MediaRemoteVideo', 'MediaVideo'];
export const isMediaUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaUnion"');
    return MediaUnion_possibleTypes.includes(obj.__typename);
};
const MediaVideo_possibleTypes = ['MediaVideo'];
export const isMediaVideo = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMediaVideo"');
    return MediaVideo_possibleTypes.includes(obj.__typename);
};
const Menu_possibleTypes = ['Menu'];
export const isMenu = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMenu"');
    return Menu_possibleTypes.includes(obj.__typename);
};
const MenuInterface_possibleTypes = ['Menu'];
export const isMenuInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMenuInterface"');
    return MenuInterface_possibleTypes.includes(obj.__typename);
};
const MenuItem_possibleTypes = ['MenuItem'];
export const isMenuItem = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMenuItem"');
    return MenuItem_possibleTypes.includes(obj.__typename);
};
const MenuItemAttributes_possibleTypes = ['MenuItemAttributes'];
export const isMenuItemAttributes = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMenuItemAttributes"');
    return MenuItemAttributes_possibleTypes.includes(obj.__typename);
};
const MenuUnion_possibleTypes = ['Menu'];
export const isMenuUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMenuUnion"');
    return MenuUnion_possibleTypes.includes(obj.__typename);
};
const MetaTag_possibleTypes = ['MetaTagLink', 'MetaTagProperty', 'MetaTagScript', 'MetaTagValue'];
export const isMetaTag = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTag"');
    return MetaTag_possibleTypes.includes(obj.__typename);
};
const MetaTagInterface_possibleTypes = ['BlockContentAnotherType', 'BlockContentBasicBlock', 'MediaAudio', 'MediaDocument', 'MediaImage', 'MediaRemoteVideo', 'MediaVideo', 'NodePage', 'TermTag'];
export const isMetaTagInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagInterface"');
    return MetaTagInterface_possibleTypes.includes(obj.__typename);
};
const MetaTagLink_possibleTypes = ['MetaTagLink'];
export const isMetaTagLink = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagLink"');
    return MetaTagLink_possibleTypes.includes(obj.__typename);
};
const MetaTagLinkAttributes_possibleTypes = ['MetaTagLinkAttributes'];
export const isMetaTagLinkAttributes = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagLinkAttributes"');
    return MetaTagLinkAttributes_possibleTypes.includes(obj.__typename);
};
const MetaTagProperty_possibleTypes = ['MetaTagProperty'];
export const isMetaTagProperty = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagProperty"');
    return MetaTagProperty_possibleTypes.includes(obj.__typename);
};
const MetaTagPropertyAttributes_possibleTypes = ['MetaTagPropertyAttributes'];
export const isMetaTagPropertyAttributes = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagPropertyAttributes"');
    return MetaTagPropertyAttributes_possibleTypes.includes(obj.__typename);
};
const MetaTagScript_possibleTypes = ['MetaTagScript'];
export const isMetaTagScript = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagScript"');
    return MetaTagScript_possibleTypes.includes(obj.__typename);
};
const MetaTagScriptAttributes_possibleTypes = ['MetaTagScriptAttributes'];
export const isMetaTagScriptAttributes = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagScriptAttributes"');
    return MetaTagScriptAttributes_possibleTypes.includes(obj.__typename);
};
const MetaTagUnion_possibleTypes = ['MetaTagLink', 'MetaTagProperty', 'MetaTagScript', 'MetaTagValue'];
export const isMetaTagUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagUnion"');
    return MetaTagUnion_possibleTypes.includes(obj.__typename);
};
const MetaTagValue_possibleTypes = ['MetaTagValue'];
export const isMetaTagValue = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagValue"');
    return MetaTagValue_possibleTypes.includes(obj.__typename);
};
const MetaTagValueAttributes_possibleTypes = ['MetaTagValueAttributes'];
export const isMetaTagValueAttributes = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMetaTagValueAttributes"');
    return MetaTagValueAttributes_possibleTypes.includes(obj.__typename);
};
const Mutation_possibleTypes = ['Mutation'];
export const isMutation = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isMutation"');
    return Mutation_possibleTypes.includes(obj.__typename);
};
const NodeInterface_possibleTypes = ['NodePage'];
export const isNodeInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isNodeInterface"');
    return NodeInterface_possibleTypes.includes(obj.__typename);
};
const NodePage_possibleTypes = ['NodePage'];
export const isNodePage = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isNodePage"');
    return NodePage_possibleTypes.includes(obj.__typename);
};
const NodeUnion_possibleTypes = ['NodePage'];
export const isNodeUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isNodeUnion"');
    return NodeUnion_possibleTypes.includes(obj.__typename);
};
const ParagraphAccordion_possibleTypes = ['ParagraphAccordion'];
export const isParagraphAccordion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphAccordion"');
    return ParagraphAccordion_possibleTypes.includes(obj.__typename);
};
const ParagraphBlock_possibleTypes = ['ParagraphBlock'];
export const isParagraphBlock = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphBlock"');
    return ParagraphBlock_possibleTypes.includes(obj.__typename);
};
const ParagraphCallToAction_possibleTypes = ['ParagraphCallToAction'];
export const isParagraphCallToAction = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphCallToAction"');
    return ParagraphCallToAction_possibleTypes.includes(obj.__typename);
};
const ParagraphInterface_possibleTypes = ['ParagraphAccordion', 'ParagraphBlock', 'ParagraphCallToAction', 'ParagraphMedia', 'ParagraphQuote', 'ParagraphSection', 'ParagraphTable', 'ParagraphText'];
export const isParagraphInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphInterface"');
    return ParagraphInterface_possibleTypes.includes(obj.__typename);
};
const ParagraphMedia_possibleTypes = ['ParagraphMedia'];
export const isParagraphMedia = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphMedia"');
    return ParagraphMedia_possibleTypes.includes(obj.__typename);
};
const ParagraphQuote_possibleTypes = ['ParagraphQuote'];
export const isParagraphQuote = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphQuote"');
    return ParagraphQuote_possibleTypes.includes(obj.__typename);
};
const ParagraphSection_possibleTypes = ['ParagraphSection'];
export const isParagraphSection = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphSection"');
    return ParagraphSection_possibleTypes.includes(obj.__typename);
};
const ParagraphTable_possibleTypes = ['ParagraphTable'];
export const isParagraphTable = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphTable"');
    return ParagraphTable_possibleTypes.includes(obj.__typename);
};
const ParagraphText_possibleTypes = ['ParagraphText'];
export const isParagraphText = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphText"');
    return ParagraphText_possibleTypes.includes(obj.__typename);
};
const ParagraphUnion_possibleTypes = ['ParagraphAccordion', 'ParagraphBlock', 'ParagraphCallToAction', 'ParagraphMedia', 'ParagraphQuote', 'ParagraphSection', 'ParagraphTable', 'ParagraphText'];
export const isParagraphUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isParagraphUnion"');
    return ParagraphUnion_possibleTypes.includes(obj.__typename);
};
const Query_possibleTypes = ['Query'];
export const isQuery = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isQuery"');
    return Query_possibleTypes.includes(obj.__typename);
};
const Route_possibleTypes = ['RouteExternal', 'RouteInternal', 'RouteRedirect'];
export const isRoute = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isRoute"');
    return Route_possibleTypes.includes(obj.__typename);
};
const RouteEntityUnion_possibleTypes = ['NodePage'];
export const isRouteEntityUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isRouteEntityUnion"');
    return RouteEntityUnion_possibleTypes.includes(obj.__typename);
};
const RouteExternal_possibleTypes = ['RouteExternal'];
export const isRouteExternal = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isRouteExternal"');
    return RouteExternal_possibleTypes.includes(obj.__typename);
};
const RouteInternal_possibleTypes = ['RouteInternal'];
export const isRouteInternal = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isRouteInternal"');
    return RouteInternal_possibleTypes.includes(obj.__typename);
};
const RouteRedirect_possibleTypes = ['RouteRedirect'];
export const isRouteRedirect = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isRouteRedirect"');
    return RouteRedirect_possibleTypes.includes(obj.__typename);
};
const RouteUnion_possibleTypes = ['RouteExternal', 'RouteInternal', 'RouteRedirect'];
export const isRouteUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isRouteUnion"');
    return RouteUnion_possibleTypes.includes(obj.__typename);
};
const SchemaInformation_possibleTypes = ['SchemaInformation'];
export const isSchemaInformation = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isSchemaInformation"');
    return SchemaInformation_possibleTypes.includes(obj.__typename);
};
const Table_possibleTypes = ['Table'];
export const isTable = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isTable"');
    return Table_possibleTypes.includes(obj.__typename);
};
const TableRow_possibleTypes = ['TableRow'];
export const isTableRow = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isTableRow"');
    return TableRow_possibleTypes.includes(obj.__typename);
};
const TermInterface_possibleTypes = ['TermTag'];
export const isTermInterface = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isTermInterface"');
    return TermInterface_possibleTypes.includes(obj.__typename);
};
const TermTag_possibleTypes = ['TermTag'];
export const isTermTag = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isTermTag"');
    return TermTag_possibleTypes.includes(obj.__typename);
};
const TermUnion_possibleTypes = ['TermTag'];
export const isTermUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isTermUnion"');
    return TermUnion_possibleTypes.includes(obj.__typename);
};
const Text_possibleTypes = ['Text'];
export const isText = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isText"');
    return Text_possibleTypes.includes(obj.__typename);
};
const TextSummary_possibleTypes = ['TextSummary'];
export const isTextSummary = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isTextSummary"');
    return TextSummary_possibleTypes.includes(obj.__typename);
};
const UnsupportedType_possibleTypes = ['UnsupportedType'];
export const isUnsupportedType = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isUnsupportedType"');
    return UnsupportedType_possibleTypes.includes(obj.__typename);
};
const View_possibleTypes = [];
export const isView = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isView"');
    return View_possibleTypes.includes(obj.__typename);
};
const ViewPageInfo_possibleTypes = ['ViewPageInfo'];
export const isViewPageInfo = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isViewPageInfo"');
    return ViewPageInfo_possibleTypes.includes(obj.__typename);
};
const ViewReference_possibleTypes = ['ViewReference'];
export const isViewReference = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isViewReference"');
    return ViewReference_possibleTypes.includes(obj.__typename);
};
const ViewResultUnion_possibleTypes = ['UnsupportedType'];
export const isViewResultUnion = (obj) => {
    if (!obj?.__typename)
        throw new Error('__typename is missing in "isViewResultUnion"');
    return ViewResultUnion_possibleTypes.includes(obj.__typename);
};
export const enumImageStyleAvailable = {
    LARGE: 'LARGE',
    LARGE2X: 'LARGE2X',
    MEDIUM: 'MEDIUM',
    MEDIUM2X: 'MEDIUM2X',
    THUMBNAIL: 'THUMBNAIL',
    WIDE: 'WIDE',
    WIDE2X: 'WIDE2X'
};
export const enumMenuAvailable = {
    FOOTER: 'FOOTER',
    MAIN: 'MAIN'
};
export const enumSortDirection = {
    ASC: 'ASC',
    DESC: 'DESC'
};

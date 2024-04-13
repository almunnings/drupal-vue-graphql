import type { File, MediaInterface } from '@/services/drupal';
export declare const getMediaComponent: (media: MediaInterface) => import("vue").DefineComponent<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaAudio>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaAudio>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaDocument>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaDocument>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaImage>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaImage>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaRemoteVideo>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaRemoteVideo>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaVideo>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: import("vue").PropType<import("@/services/drupal").MediaVideo>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    media: {
        type: import("vue").PropType<MediaInterface>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: import("vue").PropType<MediaInterface>;
        required: true;
    };
}>>, {}, {}>;
export declare const getFileExtension: (file: File) => string | undefined;
export declare const getFileIcon: (file: File) => "file-excel" | "file-word" | "file-text" | "file-pdf" | "file-archive" | "file-powerpoint" | "file";

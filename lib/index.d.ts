import { ITranslation } from "./interfaces/ITranslation";
import { IOptions } from "./interfaces/IOptions";
export declare enum Language {
    EN = "en",
    BG = "bg",
    PT = "pt",
    ES = "es",
    ESLarga = "es-larga",
    ESCorto = "es-corto"
}
export declare class Wordify {
    protected number: string;
    protected firstIteration: boolean;
    protected lang: ITranslation;
    protected options: IOptions;
    protected hasInUnits(n: string): string;
    protected isLessThan100(n: string): string;
    protected isLessThan1000(n: string): string;
    protected convert(n: string): string;
    static from(number: string | number): Wordify;
    toWords(language?: Language, options?: IOptions): string;
}
//# sourceMappingURL=index.d.ts.map
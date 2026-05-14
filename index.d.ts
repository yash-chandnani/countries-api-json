declare module 'countries-api-json' {
    export interface Country {
        name: string
        code: string
        dial_code: string
        flag: string
        flag_url: string
    }

    const countries: Country[];
    export default countries;
}

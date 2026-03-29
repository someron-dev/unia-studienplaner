export type ModuleGroup = {
    name: string;
    ects: number;
};

export type Program = {
    name: string;
    version: string;
    totalECTS: number;
    moduleGroups: ModuleGroup[];
};
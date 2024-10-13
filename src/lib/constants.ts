
export const CHAR_LIST_CODES = [
    "Corin",
    "QingYi",
    "Jane",
    "Soukaku",
    "Billy",
    "Grace",
    "Anby",
    "Caesar",
    "Nicole",
    "Piper",
    "Nekomata",
    "Zhu Yuan",
    "Lycaon",
    "Lighter",
    "Anton",
    "Soldier 11",
    "Ben",
    "Rina",
    "Lucy",
    "Koleda",
    "Seth",
    "Burnice",
    "Ellen",
]



export const CharacterID = {
    CORIN: "1061",
    QINGYI: "1251",
    JANE: "1261",
    SOUKAKU: "1131",
    BILLY: "1081",
    GRACE: "1181",
    ANBY: "1011",
    NICOLE: "1031",
    PIPER: "1281",
    NEKOMATA: "1021",
    NEKOMATA_2: "1022",
    ZHUYUAN: "1241",
    LYCAON: "1141",
    ANTON: "1111",
    SOLDIER_11: "1041",
    BEN: "1121",
    RINA: "1211",
    LUCY: "1151",
    KOLEDA: "1101",
    SETH: "1271",
    BURNICE: "1171",
    ELLEN: "1191"
}

export const AttributeID = {
    HP_BASE: 11101,
    HP_P: 11102,
    HP_FLAT: 11103,
    ATK_BASE: 12101,
    ATK_P: 12102,
    ATK_FLAT: 12103,
    IMPACT: 12201,
    IMPACT_P: 12202,
    DEF_BASE: 13101,
    DEF_P: 13102,
    DEF_FLAT: 13103,
    CRIT_RATE_BASE: 20101,
    CRIT_RATE: 20103,
    CRIT_DMG_BASE: 21101,
    CRIT_DMG: 21103,
    PEN_BASE: 23101,
    PEN_P: 23103,
    PEN_FLAT: 23203,
    ENERGY_RATE: 30501,
    ENERGY_P: 30502,
    ANOMALY_PROF_BASE: 31201,
    ANOMALY_PROF: 31203,
    ANOMALY_MAST_BASE: 31401,
    ANOMALY_MAST: 31402,
    PHYS_DMG: 31503,
    FIRE_DMG: 31603,
    ICE_DMG: 31703,
    ELEC_DMG: 31803,
    ETHER_DMG: 31903,
};

export type AttrKeys = keyof typeof AttributeID
export type AttrValues = (typeof AttributeID)[AttrKeys]


export const StatsToReadableShort = {
    [AttributeID.HP_BASE]: "HP",
    [AttributeID.HP_P]: "HP %",
    [AttributeID.HP_FLAT]: "HP",
    [AttributeID.ATK_BASE]: "ATK",
    [AttributeID.ATK_P]: "ATK %",
    [AttributeID.ATK_FLAT]: "ATK",
    [AttributeID.IMPACT]: "IMP",
    [AttributeID.IMPACT_P]: "IMP %",
    [AttributeID.DEF_BASE]: "DEF",
    [AttributeID.DEF_P]: "DEF %",
    [AttributeID.DEF_FLAT]: "DEF",
    [AttributeID.CRIT_RATE_BASE]: "Crit Rate",
    [AttributeID.CRIT_RATE]: "Crit Rate",
    [AttributeID.CRIT_DMG_BASE]: "Crit DMG",
    [AttributeID.CRIT_DMG]: "Crit DMG",
    [AttributeID.PEN_BASE]: "PEN",
    [AttributeID.PEN_P]: "PEN %",
    [AttributeID.PEN_FLAT]: "PEN",
    [AttributeID.ENERGY_RATE]: "Energy Regen",
    [AttributeID.ENERGY_P]: "Energy %",
    [AttributeID.ANOMALY_PROF_BASE]: "AP",
    [AttributeID.ANOMALY_PROF]: "AP",
    [AttributeID.ANOMALY_MAST_BASE]: "AM",
    [AttributeID.ANOMALY_MAST]: "AM %",
    [AttributeID.PHYS_DMG]: "Physical",
    [AttributeID.FIRE_DMG]: "Fire",
    [AttributeID.ICE_DMG]: "Ice",
    [AttributeID.ELEC_DMG]: "Electric",
    [AttributeID.ETHER_DMG]: "Ether"
}




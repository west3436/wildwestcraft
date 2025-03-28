ServerEvents.recipes(event => {
    const biomeGroups = {
        offland: ['mekanism:fluorite_ore', 'mekanism:deepslate_fluorite_ore', 'mekanism:osmium_ore', 'mekanism:deepslate_osmium_ore', 'nuclearcraft:platinum_ore', 'nuclearcraft:deepslate_platinum_ore', 'nuclearcraft:silver_ore', 'nuclearcraft:deepslate_silver_ore', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore'],
        highland: ['nuclearcraft:cobalt_ore', 'nuclearcraft:deepslate_cobalt_ore', 'mekanism:osmium_ore', 'mekanism:deepslate_osmium_ore', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore'],
        woodland: ['mekanism:osmium_ore', 'mekanism:deepslate_osmium_ore', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore'],
        wetland: ['nuclearcraft:cobalt_ore', 'nuclearcraft:deepslate_cobalt_ore', 'nuclearcraft:silver_ore', 'nuclearcraft:deepslate_silver_ore', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore'],
        flatland: ['mekanism:fluorite_ore', 'mekanism:deepslate_fluorite_ore', 'mekanism:osmium_ore', 'mekanism:deepslate_osmium_ore', 'nuclearcraft:platinum_ore', 'nuclearcraft:deepslate_platinum_ore', 'mekanism:tin_ore', 'mekanism:deepslate_tin_ore'],
        arid: ['nuclearcraft:boron_ore', 'nuclearcraft:deepslate_boron_ore', 'nuclearcraft:magnesium_ore', 'nuclearcraft:deepslate_magnesium_ore', 'nuclearcraft:thorium_ore', 'nuclearcraft:deepslate_thorium_ore', 'nuclearcraft:uranium_ore', 'nuclearcraft:deepslate_uranium_ore']
    };

    const biomeMapping = {
        offland: [
            'minecraft:ocean', 'minecraft:deep_ocean', 'minecraft:mushroom_fields',
            'minecraft:cold_ocean', 'minecraft:lukewarm_ocean', 'minecraft:warm_ocean',
            'minecraft:frozen_ocean', 'minecraft:deep_cold_ocean', 'minecraft:deep_lukewarm_ocean',
            'minecraft:deep_frozen_ocean'
        ],
        highland: [
            'minecraft:mountains', 'minecraft:wooded_mountains', 'minecraft:gravelly_mountains',
            'minecraft:snowy_mountains', 'minecraft:snowy_taiga_mountains', 'minecraft:taiga_mountains',
            'minecraft:mountain_edge'
        ],
        woodland: [
            'minecraft:forest', 'minecraft:birch_forest', 'minecraft:dark_forest',
            'minecraft:wooded_hills', 'minecraft:tall_birch_forest', 'minecraft:tall_birch_hills',
            'minecraft:flower_forest'
        ],
        wetland: [
            'minecraft:swamp', 'minecraft:mangrove_swamp', 'minecraft:river',
            'minecraft:swamp_hills'
        ],
        flatland: [
            'minecraft:plains', 'minecraft:sunflower_plains', 'minecraft:savanna',
            'minecraft:savanna_plateau', 'minecraft:shattered_savanna', 'minecraft:shattered_savanna_plateau',
            'minecraft:beach', 'minecraft:stone_shore'
        ],
        arid: [
            'minecraft:desert', 'minecraft:desert_hills', 'minecraft:desert_lakes',
            'minecraft:badlands', 'minecraft:wooded_badlands_plateau', 'minecraft:badlands_plateau',
            'minecraft:eroded_badlands'
        ]
    };

    for (const [biomeGroup, ores] of Object.entries(biomeGroups)) {
        const thebiomes = biomeMapping[biomeGroup];
        ores.forEach(ore => {
            event.recipes.createoreexcavation.vein(`{"text": "${ore.replace(/_/g, ' ')} vein"}`, ore)
                .placement(1024, 128, Math.floor(Math.random() * 100000000))
                .biomeWhitelist(thebiomes)
                .chance(0.25)
                .id(`kubejs:${ore.replace(/:/g, '_')}_vein`);
        });
    }
});
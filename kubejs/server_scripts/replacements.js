ServerEvents.tags('item', event => {
const plastics = [
 'industrialforegoing:plastic',
 'tfmg:plastic_sheet',
 'pneumaticcraft:plastic'
]
plastics.forEach(plastic => {
	event.add('forge:plastics',plastic)
})
})

ServerEvents.recipes(event => {
// Remove old recipes
event.remove({output: 'mekanism:metallurgic_infuser'})
event.remove({output: 'mekanism:steel_casing'})
event.remove({output: 'nuclearcraft:alloy_smelter'})
event.remove({output: 'nuclearcraft:manufactory'})
event.remove({output: 'ae2:inscriber'})
event.remove({output: 'industrialrenewal:sponge_iron'})
event.remove({output: 'industrialrenewal:ingot_steel'})

// Add new recipes
event.shaped('mekanism:metallurgic_infuser', [
 'SBS',
 'ROR',
 'SBS'
], {
 S: 'tfmg:steel_ingot',
 B: 'minecraft:blast_furnace',
 R: 'minecraft:redstone',
 O: 'mekanism:block_osmium'
})

event.shaped('mekanism:steel_casing', [
 'SPS',
 'POP',
 'SPS'
], {
 S: 'tfmg:steel_ingot',
 P: 'tfmg:plastic_sheet',
 O: 'mekanism:block_osmium'
})

event.shaped('nuclearcraft:alloy_smelter', [
 'PRP',
 'MBM',
 'PCP'
], {
 P: 'nuclearcraft:plate_basic',
 R: 'minecraft:redstone',
 M: 'minecraft:brick',
 B: 'mekanism:metallurgic_infuser',
 C: 'nuclearcraft:coil_copper'
})

event.shaped('nuclearcraft:manufactory', [
 'LRL',
 'FEF',
 'LCL'
], {
 L: 'tfmg:lead_ingot',
 R: 'minecraft:redstone',
 F: 'minecraft:flint',
 E: 'mekanism:enrichment_chamber',
 C: 'nuclearcraft:coil_copper'
})

event.shaped('ae2:inscriber', [
'SSS',
'CNC',
'SSS'
], {
 S: 'tfmg:steel',
 C: 'create:sticky_mechanical_piston',
 N: 'mekanism:control_circuit/ultimate'
})

event.replaceInput({}, 'industrialforegoing:plastic', '#forge:plastics')
event.replaceInput({}, 'tfmg:plastic_sheet', '#forge:plastics')
event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastics')

})

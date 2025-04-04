EntityEvents.death(event => {
    let player = event.player;
    let source = event.source.entity;

    if (source && source.isPlayer()) {
        let item = Item.of('kubejs:scalp').withName(`${player.name.string}'s Scalp`);
        
        event.server.runCommandSilent(`summon item ${player.x} ${player.y} ${player.z} {Item:{id:"kubejs:scalp",Count:1b,tag:{display:{Name:'{"text":"${player.name.string}\'s Scalp"}'}}}}`);
    }
});
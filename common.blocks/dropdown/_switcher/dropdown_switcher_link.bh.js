module.exports = function(bh) {

    bh.match('dropdown_switcher_link__switcher', function(ctx, json) {
        var dropdown = ctx.tParam('dropdown'),
            switcher = dropdown.switcher;

        if(Array.isArray(switcher)) return switcher;

        var res = ctx.isSimple(switcher)?
            { block : 'link', mods : { pseudo : true }, content : switcher } :
            switcher;

        if(res.block === 'link') {
            var resMods = res.mods || (res.mods = {}),
                dropdownMods = json.blockMods;
            resMods.theme || (resMods.theme = dropdownMods.theme);
            resMods.disabled = dropdownMods.disabled;

            res.mix = ctx.tParam('mix');
        }

        return res;
    });

};

module.exports = function(bh) {

    bh.match('dropdown_switcher_button__switcher', function(ctx, json) {
        var dropdown = ctx.tParam('dropdown'),
            switcher = dropdown.switcher;

        if(Array.isArray(switcher)) return switcher;

        var res = ctx.isSimple(switcher)?
            { block : 'button', text : switcher } :
            switcher;

        if(res.block === 'button') {
            var resMods = res.mods || (res.mods = {}),
                dropdownMods = json.blockMods;
            resMods.size || (resMods.size = dropdownMods.size);
            resMods.theme || (resMods.theme = dropdownMods.theme);
            resMods.disabled = dropdownMods.disabled;

            res.mix = ctx.tParam('mix');
        }

        return res;
    });

};

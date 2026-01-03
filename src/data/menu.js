module.exports = {
    file:[
        {
            text:"Open",
            type:"open",
            disabled:false,
            callback:function () {
                $event.emit('open:menu')
            }
        },
        {
            text:"Copy",
            type:"copy",
            disabled:false,
            callback:function () {
                $event.emit('copy:menu')
            }
        },
        {
            type:"divide"
        },
        {
            text:"Delete",
            type:"delete",
            disabled:false,
            callback:function () {
                $event.emit('delete:menu')
            }
        },
        {
            text:"Properties",
            type:"prop",
            callback:function (file) {
                $event.emit('openFileProp:menu',file);
            }
        }
    ],
    wallpaper:[
        {
            text:"Refresh",
            type:"refresh",
            disabled:false,
            callback:function () {
//                console.log(1);
                $event.emit('refresh:menu')
            }
        },
        {
            text:'Select All',
            type:"selectAll",
            callback:function () {
                $event.emit('selectAll:menu');
            }
        },
        {
            text:"Paste",
            type:"paste",
            disabled:true,
            callback:function () {
                $event.emit('paste:menu')
            }
        },
        {
            type:'divide'
        },
        {
            text:"Reset All Files",
            type:"resetAllFile",
            callback:function () {
                $event.emit('resetFile:menu');
            }
        }
    ]
}
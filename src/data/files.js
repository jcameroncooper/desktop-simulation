module.exports = [
    {
        name: "Firefox",
        app: "browser",
        icon: "firefox",
        options: {
            data: {
                index: "http://qq.com"
            },
            singleton: true
            // resizable:false
        }
    },
    {
        name: "Calculator",
        app: "calculator",
        icon: "",
        options: {
            // resizable:false,
            width:400,
            height:400,
        }
    },
    {
        name: "Custom",
        app: "custom-app",
        icon: "",
        options: {
          singleton: true,
        }
    },
    {
        name: "Do Work",
        app: "script",
        icon: "",
        options: {}
    },
    {
        name: "Files",
        app: "folder",
        icon: "",
        path: "/data",
        options: {},
    },
    {
        name: "img23",
        app: "image",
        icon: "",
        path: "/data/",
        options: {}
    },
];

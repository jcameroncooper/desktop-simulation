<style lang="less" rel="stylesheet/less">
    .folder .file-section {
        top: 20px;
    }
</style>
<template>
    <div class="folder">
      Path:{{ path }}
      <files class="scope" :files.sync="localfiles"></files>
    </div>
</template>

<script>
    var appController = require('service/app-controller');
    
    module.exports = {
        props:{
            app:true,
        },
        data: function () {
            return {
                files:appController.files,
                path:this.app.path,
            }
        },
        methods: {
        },
        computed: {
          localfiles:function () {
              let path = this.path;
              return this.files.filter(function(elt) {
                return elt.path.startsWith(path);
              });
          },
        },        
        components: {
          files:require('views/file.vue'),
        },
        ready: function () {

        }
    }
</script>
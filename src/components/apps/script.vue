<style lang="less" rel="stylesheet/less">
    .scriptapp {
        padding: 1rem;
    }

    .scriptapp p {
      font-family: monospace;
    }
    
    #scriptinput input[type="text"] {
      font-family: monospace;
      padding: 0.3rem;
    }
</style>
<template>
    <div class="scriptapp">
        <p id="scripttxt">
          <span v-html="output"></span>
        </p>
        <form v-if="!typing" v-on:submit.prevent="submitInput">
          <p id="scriptinput">
            Input? <input type="text" v-model="input" v-el:prompt />
            <input type="submit" value="Send >" />
          </p>
        </form>
    </div>
</template>

<script>
    const TYPESPEED = 50; /* The speed/duration of the effect in milliseconds */

    module.exports = {
        props: {
            app:true,
        },
        data: function () {
            return {
                'output': '',
                'input': '',
                'typing': false,
            }
        },
        methods: {
            typeWriter: function (txt, attrname = 'output', i = 0, speed = TYPESPEED) {
              // console.log("typeWriter", txt, attrname, i, speed);
              this.unreadyInput();
              
              if (i < txt.length) {
                let ch = txt.charAt(i);
                // console.log(ch);
                if (ch === "\n") {
                  // console.log("break");
                  ch = "<br/>";
                }
                this[attrname] += ch;
                i++;
                setTimeout(this.typeWriter, speed, txt, attrname, i, speed);
              } else {
                // console.log("END");
                let app = this;
                // setTimeout(function(){ app.typing = false }, speed*10);
                setTimeout(this.readyInput, speed*10);
              }
            },
            unreadyInput: function() {
              this.typing = true;
            },
            readyInput: function() {
              this.typing = false;
              this.$nextTick(() => {
                // this.typing causes elt to be rendered, so wait until present
                this.$els['prompt'].focus();
              })
            },
            submitInput:function () {
                console.log("submit", this.input);
                this.output += "You said: ";
                this.output += this.input;
                this.typeWriter('\n');
            },
        },
        components: {},
        ready: function () {
            console.log("ready");
            // this.scripttxt = "asdf";
            this.typeWriter("This is a test.\nasdf\n");
        }
    }
</script>
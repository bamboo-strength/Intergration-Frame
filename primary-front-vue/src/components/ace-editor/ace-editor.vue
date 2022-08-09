<template src="./ace-editor.html"></template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PropTypes from '../vue-types';
import AceTheme from './ace-theme';
import AceMode from './ace-mode';
import Ace from 'ace-builds';
import CodeFormat from '@/assets/svg/format.svg';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-beautify';
import './utils/ace-editor.mode';
import './utils/ace-editor.theme';

const editor = 'ace-editor';

@Component({
  name: 'ace-editor'
})
export default class AceEditor extends Vue {
  /** 只读标识 */
  @Prop({ type: Boolean, default: false })
  public readOnly: boolean = false;

  /** 字体大小 */
  @Prop({ type: Number, default: 14 })
  public fontSize: number = 14;

  /** 缩减大小 */
  @Prop({ type: Number, default: 2 })
  public tabSize: number = 2;

  /** 风格 */
  @Prop({ type: String, default: AceTheme.github })
  public theme: string = AceTheme.github;

  /** 语言 */
  @Prop({ type: String, default: AceMode.javascript })
  public mode: string = AceMode.javascript;

  /** 折叠样式 */
  @Prop({ ...PropTypes.oneOf(['markbegin', 'markbeginend', 'manual']), default: 'markbeginend' })
  public foldStyle: any = 'markbeginend';

  aceEditor: Ace.Ace.Editor | null = null;

  beautifyTools: any = null;

  svg = {
    CodeFormat
  }

  constructor() {
    super();

    /** 初始化格式化工具 */
    this.beautifyTools = Ace.require('ace/ext/beautify');
  }

  mounted() {
    this.initEditor();
    this.beautify();
  }

  initEditor() {
    if (this.aceEditor) {
      console.warn('The ace-editor already exists. Please destroy the ace-editor first!');
      return;
    }

    const aceEditor = Ace.edit((this.$refs as any)[editor], {
      fontSize: this.fontSize,
      theme: `ace/theme/${this.theme}`,
      mode: `ace/mode/${this.mode}`,
      tabSize: this.tabSize,
      highlightGutterLine: false,
      showLineNumbers: false,
      foldStyle: this.foldStyle
    });

    aceEditor.setValue('export default { data: {}, methods: {} }');

    aceEditor.setReadOnly(this.readOnly);

    aceEditor.on('change', (delta: any) => {});

    this.aceEditor = aceEditor;
  }

  beautify() {
    this.beautifyTools.beautify(this.aceEditor!.getSession());
  }
}
</script>
<style lang="less" scoped src="./ace-editor.less"></style>

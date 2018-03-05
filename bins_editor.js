import React, { Component } from 'react';
import CodeMirror from '@skidding/react-codemirror';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');

class BinsEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }

  render() {
    return (
      <div className="col-xs-8">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.onEditorChange.bind(this)}
          options={{
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: true
          }}
        />
      </div>
    );
  }
}

export default BinsEditor;

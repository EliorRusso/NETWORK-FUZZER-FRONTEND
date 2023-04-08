import { Terminal } from 'xterm';
import React from 'react';
import { FitAddon } from 'xterm-addon-fit';
import execa from 'execa';

class HelloTerminal extends React.Component {
  constructor(props) {
    super(props);
    this.xterm = new Terminal();
    this.fitAddon = new FitAddon();
    this.xterm.loadAddon(this.fitAddon);
  }

  componentDidMount() {
    this.xterm.open(this.xtermRef);
    this.fitAddon.fit();
    this.handleCommandExecution('./home/elior/Fuzzer/Mutate/p');
  }

  async handleCommandExecution(input) {
    try {
      const { stdout } = await execa.command(input);
      this.xterm.writeln(stdout);
    } catch (err) {
    this.xterm.writeln(err.message);
    }
    }
    
    render() {
    return (
    <div>
    <div ref={ref => this.xtermRef = ref} />
    </div>
    );
    }
    }
    
    export default HelloTerminal;

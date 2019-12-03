const sha256 = require('sha256');
import * as stream from 'stream';
import {
    GoAwayMessage,
    NetMessage,
    TimeMessage,
    NoticeMessage,
    RequestMessage,
    SyncRequestMessage,
    SignedBlockMessage, PackedTransactionMessage
} from "../messages";
import {Serialize} from "eosjs/dist";

export class EOSIOStreamConsoleDebugger extends stream.Writable {
    private prefix: string;

    constructor(options: any){
        super({objectMode: true});
        this.prefix = options.prefix || '';
    }

    _write(chunk: any, encoding: string, callback: (error?: (Error | null)) => void): void {
        const msg = NetMessage.from(chunk[0]);
        msg.copy(chunk[2]);

        const prefix = `${this.prefix}  [${chunk[1]}]`;

        switch (chunk[1]){
            case 'handshake_message':
                console.log(`${prefix} handshake from ${chunk[2].p2p_address}`);
                break;
            case 'time_message':
                const t_msg = <TimeMessage>msg;
                console.log(`${prefix} time message dst: ${t_msg.dst}, org: ${t_msg.org}, rec: ${t_msg.rec}, xmt: ${t_msg.xmt}`);
                break;
            case 'go_away_message':
                const ga_msg = <GoAwayMessage>msg;
                let reason = GoAwayMessage.reasons[ga_msg.reason];
                console.log(`${prefix} [${chunk[1]}] go away message ${reason}`);
                break;
            case 'notice_message':
                const n_msg = <NoticeMessage>msg;
                console.log(`${prefix} notice message, lib : ${n_msg.known_trx.pending}, head ${n_msg.known_blocks.pending}`);
                break;
            case 'request_message':
                const r_msg = <RequestMessage>msg;
                console.log(`${prefix} request message`);
                break;
            case 'sync_request_message':
                const sr_msg = <SyncRequestMessage>msg;
                console.log(`${prefix} sync request message`);
                break;
            case 'signed_block':
                const sb_msg = <SignedBlockMessage>msg;
                const block_num_hex = sb_msg.previous.substr(0, 8); // first 64 bits
                const block_num = parseInt(block_num_hex, 16) + 1;
                console.log(`${prefix} #${block_num} signed by ${sb_msg.producer}`);
                break;
            case 'packed_transaction':
                const pt_msg = <PackedTransactionMessage>msg;
                const trx_bin = Serialize.hexToUint8Array(pt_msg.packed_trx);
                const trx_id = sha256(trx_bin);
                console.log(`${prefix} Transaction ${trx_id}`);
                break;
            default:
                console.log('Unknown chunk', chunk);
                break;
        }

        callback();
    }
}
const a0_0x1862f4 = a0_0x2461;

function a0_0x2461(_0xf24df6, _0x38c71f) {
    const _0x24ffc0 = a0_0x24ff();
    return a0_0x2461 = function (_0x246184, _0x8ae445) {
        _0x246184 = _0x246184 - 0xe1;
        let _0xd05c8a = _0x24ffc0[_0x246184];
        return _0xd05c8a;
    }, a0_0x2461(_0xf24df6, _0x38c71f);
}(function (_0x3090de, _0x9dbf35) {
    const _0xba2810 = a0_0x2461,
        _0x38e80f = _0x3090de();
    while (!![]) {
        try {
            const _0x5dfc66 = parseInt(_0xba2810(0x139)) / 0x1 + -parseInt(_0xba2810(0xf9)) / 0x2 * (-parseInt(_0xba2810(0xe7)) / 0x3) + parseInt(_0xba2810(0xfc)) / 0x4 * (parseInt(_0xba2810(0x10c)) / 0x5) + -parseInt(_0xba2810(0x11d)) / 0x6 + parseInt(_0xba2810(0x112)) / 0x7 * (-parseInt(_0xba2810(0x106)) / 0x8) + parseInt(_0xba2810(0x135)) / 0x9 * (-parseInt(_0xba2810(0x127)) / 0xa) + parseInt(_0xba2810(0x11f)) / 0xb;
            if (_0x5dfc66 === _0x9dbf35) break;
            else _0x38e80f['push'](_0x38e80f['shift']());
        } catch (_0x29e990) {
            _0x38e80f['push'](_0x38e80f['shift']());
        }
    }
}(a0_0x24ff, 0xb08c6));
const register = require(a0_0x1862f4(0x13b)),
    logger = require(a0_0x1862f4(0xf7)),
    {
        select
    } = require('@inquirer/prompts'),
    fs = require('fs'),
    path = require('path'),
    settings = require('../config/config'),
    proxies = require(a0_0x1862f4(0xff)),
    {
        program,
        Option
    } = require(a0_0x1862f4(0x110)),
    {
        TelegramClient
    } = require('telegram'),
    Tapper = require(a0_0x1862f4(0xee)),
    {
        StringSession
    } = require('telegram/sessions'),
    logger2 = require('./TldLogger'),
    os = require('os'),
    sleep = require(a0_0x1862f4(0x11a)),
    _ = require(a0_0x1862f4(0x10b)),
    proxiesConvertor = require(a0_0x1862f4(0x107)),
    NonSessionTapper = require(a0_0x1862f4(0xf1));
class Luncher {
    #start_text;
    constructor() {
        const _0x9df339 = a0_0x1862f4;
        this.#start_text = _0x9df339(0xe9);
    }
    #printStartText() {
        const _0x20c9b0 = a0_0x1862f4;
        logger[_0x20c9b0(0xf8)](_0x20c9b0(0x103) + this.#get_sessions()[_0x20c9b0(0x129)] + _0x20c9b0(0xf5) + (this.#get_proxies() && Array[_0x20c9b0(0xf3)](this.#get_proxies()) ? this.#get_proxies()[_0x20c9b0(0x129)] : 0x0) + _0x20c9b0(0x120)), logger[_0x20c9b0(0xed)](_0x20c9b0(0x111)), console['log'](this.#start_text);
    }
    async [a0_0x1862f4(0x11e)]() {
        const _0x4ad716 = a0_0x1862f4;
        let _0x3969e6;
        program[_0x4ad716(0xe5)](new Option(_0x4ad716(0xf4), 'Action\x20type')[_0x4ad716(0x12b)](['1', '2', '3']))[_0x4ad716(0xf6)](!![]), program[_0x4ad716(0x108)]();
        const _0x57c8a5 = program[_0x4ad716(0x12d)]();
        _0x3969e6 = _0x57c8a5 ? parseInt(_0x57c8a5[_0x4ad716(0x134)]) : null;
        if (!_0x3969e6) {
            this.#printStartText();
            let _0x831427 = '';
            while (!![]) {
                _0x831427 = await select({
                    'message': _0x4ad716(0x109),
                    'choices': [{
                        'name': 'Create\x20session',
                        'value': '1',
                        'description': _0x4ad716(0xe1)
                    }, {
                        'name': _0x4ad716(0xe4),
                        'value': '2',
                        'description': '\x0aStart\x20the\x20bot'
                    }, {
                        'name': _0x4ad716(0x125),
                        'value': '3',
                        'description': _0x4ad716(0xe6)
                    }]
                });
                if (!_0x831427[_0x4ad716(0x121)]()['match'](/^[1-3]$/)) logger[_0x4ad716(0xeb)]('Action\x20must\x20be\x201\x20or\x202\x20or\x203');
                else break;
            }
            _0x3969e6 = parseInt(_0x831427[_0x4ad716(0x121)]());
        }
        if (_0x3969e6 === 0x1) register[_0x4ad716(0x138)]();
        else {
            if (_0x3969e6 === 0x2) {
                const _0x2e4528 = await this.#get_tg_clients();
                await this.#run_tasks(_0x2e4528);
            } else _0x3969e6 === 0x3 && await this.#run_tasks_query();
        }
    }
    async #get_tg_clients() {
        const _0x5c8a89 = a0_0x1862f4,
            _0x4e26dc = this.#get_sessions(),
            _0x4c71a3 = _0x4e26dc[_0x5c8a89(0x10f)](_0x57b0a1 => {
                const _0x2ca5fd = _0x5c8a89;
                try {
                    const _0x1d0cdc = fs['readFileSync'](path[_0x2ca5fd(0x102)](process[_0x2ca5fd(0x115)](), _0x2ca5fd(0x133), _0x57b0a1 + '.session'), _0x2ca5fd(0x116));
                    if (!_0x1d0cdc) {
                        logger[_0x2ca5fd(0x122)](_0x2ca5fd(0x10e) + _0x57b0a1 + '</b></la>\x20|\x20Session\x20is\x20empty\x20or\x20expired.\x20Create\x20a\x20new\x20one.');
                        return;
                    }
                    const _0xed8c35 = JSON[_0x2ca5fd(0x108)](_0x1d0cdc);
                    (!settings[_0x2ca5fd(0xe8)] || !settings[_0x2ca5fd(0x131)]) && (logger[_0x2ca5fd(0x122)](_0x2ca5fd(0x10a)), process[_0x2ca5fd(0xe3)](0x1));
                    (!_0xed8c35[_0x2ca5fd(0x100)] || !_0xed8c35[_0x2ca5fd(0x117)] || !_0xed8c35['apiHash']) && (logger[_0x2ca5fd(0x122)](_0x2ca5fd(0x10e) + _0x57b0a1 + _0x2ca5fd(0xef)), process[_0x2ca5fd(0xe3)](0x1));
                    !/^\d+$/ [_0x2ca5fd(0x114)](_0xed8c35[_0x2ca5fd(0x117)]) && (logger[_0x2ca5fd(0x122)](_0x2ca5fd(0x10e) + _0x57b0a1 + _0x2ca5fd(0xef)), process[_0x2ca5fd(0xe3)](0x1));
                    const _0xbf9a99 = new StringSession(_0xed8c35[_0x2ca5fd(0x100)]),
                        _0x5a9716 = new TelegramClient(_0xbf9a99, _0xed8c35['apiId'], _0xed8c35[_0x2ca5fd(0xfb)], {
                            'connectionRetries': 0x5,
                            'deviceModel': _0x2ca5fd(0x124) + os[_0x2ca5fd(0x136)](),
                            'appVersion': _0x2ca5fd(0x12f),
                            'systemVersion': '1.0.0',
                            'langCode': 'en',
                            'baseLogger': logger2
                        });
                    return {
                        'tg_client': _0x5a9716,
                        'session_name': _0x57b0a1
                    };
                } catch (_0xb3564e) {
                    logger['error'](_0x2ca5fd(0x10e) + _0x57b0a1 + _0x2ca5fd(0x132) + _0xb3564e[_0x2ca5fd(0x12e)]);
                }
            });
        return _0x4c71a3;
    }
    #get_sessions() {
        const _0x23b93c = a0_0x1862f4,
            _0xdf18d0 = path[_0x23b93c(0x102)](process[_0x23b93c(0x115)](), _0x23b93c(0x133));
        if (!fs[_0x23b93c(0x13d)](_0xdf18d0)) return [];
        const _0x4c6793 = fs[_0x23b93c(0x130)](_0xdf18d0)['map'](_0x3864c2 => {
            const _0x4c8ff3 = _0x23b93c,
                _0x2cd1ed = _0x3864c2[_0x4c8ff3(0xe2)](_0x4c8ff3(0x13c)) ? _0x3864c2[_0x4c8ff3(0xea)]('.')[0x0] : null;
            return _0x2cd1ed;
        });
        return _0x4c6793;
    }
    #get_proxies() {
        const _0x2abdd9 = a0_0x1862f4;
        if (!settings[_0x2abdd9(0x13a)] && !settings['USE_PROXY_FROM_TXT_FILE']) return null;
        settings[_0x2abdd9(0x13a)] && settings['USE_PROXY_FROM_TXT_FILE'] && (logger[_0x2abdd9(0x122)](_0x2abdd9(0x126)), process[_0x2abdd9(0xe3)](0x1));
        if (settings[_0x2abdd9(0x105)]) try {
            const _0x3e5ff5 = proxiesConvertor[_0x2abdd9(0x11b)]();
            return proxiesConvertor(_0x3e5ff5);
        } catch (_0x17e906) {
            logger[_0x2abdd9(0x122)](_0x2abdd9(0x137) + _0x17e906[_0x2abdd9(0x12e)]), process['exit'](0x1);
        }
        return proxies;
    }
    async #run_tasks(_0x3d66b3) {
        const _0x53d632 = a0_0x1862f4;
        (_['isEmpty'](_0x3d66b3) || _[_0x53d632(0x118)](_0x3d66b3) < 0x1) && (logger['error'](_0x53d632(0xfd)), process[_0x53d632(0xe3)](0x1));
        const _0x16f36f = this.#get_proxies();
        let _0x38f97d = _0x16f36f ? _0x16f36f[Symbol[_0x53d632(0x128)]]() : null;
        const _0x426390 = _0x3d66b3[_0x53d632(0x10f)](async (_0x167b45, _0x5771c5) => {
            const _0x1d1951 = _0x53d632,
                _0x441831 = _0x38f97d ? _0x38f97d['next']()['value'] : null;
            try {
                const _0x1d41e2 = _[_0x1d1951(0x104)](settings[_0x1d1951(0x101)][0x0], settings[_0x1d1951(0x101)][0x1]);
                logger[_0x1d1951(0xf8)]('<ye>[memefi]</ye>\x20|\x20' + _0x167b45['session_name'] + '\x20|\x20Sleeping\x20' + _0x1d41e2 + _0x1d1951(0x113)), await sleep(_0x1d41e2), await new Tapper(_0x167b45)['run'](_0x441831);
            } catch (_0x4b528e) {
                logger[_0x1d1951(0x122)](_0x1d1951(0xec) + _0x4b528e[_0x1d1951(0x12e)]);
            }
        });
        await Promise['all'](_0x426390);
    }
    async #run_tasks_query() {
        const _0x468d20 = a0_0x1862f4,
            _0x55a1b5 = this.#get_proxies();
        let _0x25a3c6 = _0x55a1b5 ? _0x55a1b5[Symbol[_0x468d20(0x128)]]() : null;
        const _0x4ba5d5 = path['join'](process[_0x468d20(0x115)](), _0x468d20(0xf2));
        !fs[_0x468d20(0x13d)](_0x4ba5d5) && (logger[_0x468d20(0x122)](_0x468d20(0x11c)), process['exit'](0x1));
        const _0x224134 = require(_0x4ba5d5),
            _0x5b1b89 = Object[_0x468d20(0xf0)](_0x224134);
            (!_0x5b1b89 || _[_0x468d20(0xfe)](_0x5b1b89)) && (logger['error'](_0x468d20(0xfa)), process[_0x468d20(0xe3)](0x1));

            // Async function declaration
            const _0x5b0432 = _0x5b1b89 ? _0x5b1b89[_0x468d20(0x10f)](async ([_0x593da3, _0x28407c], _0x5b5a7a) => {
                const _0x41e1c9 = _0x468d20,
                    _0x5503a2 = _0x25a3c6 ? _0x25a3c6[_0x41e1c9(0x10d)]()['value'] : null;
                try {
                    const _0x17182d = _['random'](settings[_0x41e1c9(0x101)][0x0], settings[_0x41e1c9(0x101)][0x1]);
                    
                    // Log info message and await sleep separately
                    await logger['info']('<ye>[memefi]</ye>\x20|\x20' + _0x593da3 + '\x20|\x20Sleeping\x20' + _0x17182d + _0x41e1c9(0x113));
                    await sleep(_0x17182d); 
                    
                    // Create new NonSessionTapper instance
                    await new NonSessionTapper(_0x28407c, _0x593da3)[_0x41e1c9(0x123)](_0x5503a2);
                } catch (_0x46da37) {
                    logger[_0x41e1c9(0x122)](_0x41e1c9(0x119) + _0x46da37[_0x41e1c9(0x12e)]);
                }
            }) : null;
            
            // Awaiting the Promise
            if (_0x5b0432) {
                await Promise[_0x468d20(0x12c)](_0x5b0432);
            }
    }
}
const luncher = new Luncher();
module[a0_0x1862f4(0x12a)] = luncher;

function a0_0x24ff() {
    const _0x137732 = ['entries', '../core/nonSessionTapper', 'queryIds.json', 'isArray', '--action\x20<action>', '</lb>\x20sessions\x20|\x20<pi>', 'showHelpAfterError', './logger', 'info', '2QFbPAV', 'queryIds.json\x20file\x20is\x20empty.\x20Add\x20some\x20query\x20ids\x20and\x20try\x20again.', 'apiHash', '2260mHqnNc', 'No\x20sessions\x20found.\x20Create\x20a\x20new\x20session.', 'isEmpty', '../config/proxies', 'sessionString', 'DELAY_BETWEEN_STARTING_BOT', 'join', 'Detected\x20<lb>', 'random', 'USE_PROXY_FROM_TXT_FILE', '39544ZmjOoS', './proxiesConvertor', 'parse', 'What\x20would\x20you\x20like\x20to\x20do:\x0a', 'API_ID\x20and\x20API_HASH\x20must\x20be\x20provided.', 'lodash', '1690FluNSu', 'next', '<la><b>', 'map', 'commander', '<ye><u><b>WARNING</b></u></ye>\x20<br\x20/>\x0a<b><bl>en:</bl></b>\x20NOT\x20FOR\x20SALE\x0a<b><bl>ru:</bl></b>\x20НЕ\x20ДЛЯ\x20ПРОДАЖИ\x0a<b><bl>es:</bl></b>\x20NO\x20VENTA\x0a<b><bl>fr:</bl></b>\x20PAS\x20À\x20VENDRE\x0a<b><bl>it:</bl></b>\x20NON\x20PER\x20VENDITA\x0a<b><bl>gh:</bl></b>\x20YƐN\x20TƆN\x0a\x0a<b>For\x20updates\x20and\x20more\x20bots\x20join\x20us:</b>\x20\x0a<la>https://t.me/chatwithscripters</la>\x0a', '1603HzZvME', '\x20seconds\x20before\x20starting\x20the\x20bot', 'test', 'cwd', 'utf8', 'apiId', 'size', 'Error\x20in\x20task\x20for\x20query_id:\x20', './sleep', 'readProxiesFromFile', 'queryIds.json\x20file\x20is\x20not\x20missing\x20in\x20the\x20current\x20directory.\x20Please\x20add\x20it\x20and\x20try\x20again.', '6351468pwdsYn', 'process', '20558461DLwxwR', '</pi>\x20proxies', 'trim', 'error', 'run', 'Freddy\x20Bots\x20-\x20', 'Run\x20bot\x20with\x20query\x20ids', 'You\x20can\x27t\x20use\x20both\x20USE_PROXY_FROM_JS_FILE\x20and\x20USE_PROXY_FROM_TXT_FILE', '30QZJDmL', 'iterator', 'length', 'exports', 'choices', 'all', 'opts', 'message', '1.0.0', 'readdirSync', 'API_HASH', '</b></la>\x20|\x20Error:\x20', 'sessions', 'action', '245133VrFDxB', 'type', 'Error\x20reading\x20file:\x20', 'start', '527563jfMalw', 'USE_PROXY_FROM_JS_FILE', '../core/register', '.session', 'existsSync', '\x0aCreate\x20a\x20new\x20session\x20for\x20the\x20bot', 'endsWith', 'exit', 'Run\x20bot\x20with\x20sessions', 'addOption', '\x0aStart\x20the\x20bot', '1223682tgrlTy', 'API_ID', '\x0a╔═╗╔═╗\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╔═══╗\x20\x20╔══╗\x20\x20\x20\x20\x20\x20╔╗\x20\x0a║║╚╝║║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╔══╝\x20\x20║╔╗║\x20\x20\x20\x20\x20╔╝╚╗\x0a║╔╗╔╗║╔══╗╔╗╔╗╔══╗\x20║╚══╗╔╗║╚╝╚╗╔══╗╚╗╔╝\x0a║║║║║║║╔╗║║╚╝║║╔╗║\x20║╔══╝╠╣║╔═╗║║╔╗║\x20║║\x20\x0a║║║║║║║║═╣║║║║║║═╣╔╝╚╗\x20\x20║║║╚═╝║║╚╝║\x20║╚╗\x0a╚╝╚╝╚╝╚══╝╚╩╩╝╚══╝╚══╝\x20\x20╚╝╚═══╝╚══╝\x20╚═╝\x0a\x0a©\x20Shadow\x20Scriper\x20\x20\x20\x0a\x0a', 'split', 'warning', 'Error\x20in\x20task\x20for\x20tg_client:\x20', 'paragraph', '../core/tapper', '</b></la>\x20|\x20Invalid\x20session\x20data.\x20Create\x20a\x20new\x20one.'];
    a0_0x24ff = function () {
        return _0x137732;
    };
    return a0_0x24ff();
}
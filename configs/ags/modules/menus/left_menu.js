import themeService from '../services/ThemeService.js';
import ThemesDictionary, {
    CIRCLES_THEME,
    GOLDEN_THEME,
    HARMONY_THEME,
    NEW_CAT_THEME,
    UNICAT_THEME,
    DARK_THEME,
    GAME_THEME,
    WIN_20,
    BLACK_HOLE_THEME,
    DEER_THEME,
    COLOR_THEME,
    SIBERIAN_THEME,
    MATERIAL_YOU,
    WHITE_FLOWER,
    DYNAMIC_M3_DARK,
    DYNAMIC_M3_LIGHT,
} from '../theme/themes.js';
import {
    Label,
    Box,
    Icon,
    Window,
    Button,
    Revealer,
} from 'resource:///com/github/Aylur/ags/widget.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import MusicPLayer from '../widgets/MusicPLayer.js';
import { local } from '../utils/helpers.js';
import settings from '../settings.js';
import { Widget } from '../utils/imports.js';

const Profile = () => {
    const userImage = Icon({
        className: 'profile-icon',
        icon: `${settings.assets.wallpapers}/image.png`,
        size: 80,
    });

    const myName = Label({
        className: 'profile-label',
        label: 'احمد الصعدي',
    });

    return Box({
        className: 'profile-box',
        vertical: true,
        children: [userImage, myName],
    });
};

const Header = () => {
    return Box({
        className: 'left-menu-header',
        css: `
        background-image: url("${settings.assets.wallpapers}/black-hole.png");
    `,
        vertical: true,
    }).hook(themeService, (box) => {
        let wallpaper = ThemesDictionary[themeService.selectedTheme].wallpaper;
        box.css = `background-image: url("${wallpaper}");`;
    });
};

const ThemeButton = ({
    label,
    icon,
    theme,
    label_css = 'theme-btn-label',
    icon_css = 'theme-btn-icon',
    end = local === 'RTL' ? 'margin-left: 1.1rem;' : 'margin-right: 1.1rem;',
    css = `
    min-width: 5rem;
    min-height: 2rem;
    ${end}
    border-radius: 1rem;
`,
}) => {
    const _label = Label({
        className: `unset ${label_css}`,
        label: label,
    });

    const _icon = Label({
        className: `unset ${icon_css}`,
        label: icon,
        xalign: 0.5,
    });

    const box = Box({
        className: 'unset theme-btn-box',
        children: [_label, _icon],
    });

    const button = Button({
        css: css,
        child: box,
        onClicked: () => themeService.changeTheme(theme),
    }).hook(themeService, (btn) => {
        btn.className = 'theme-btn';
        if (themeService.selectedTheme === theme) {
            btn.className = 'selected-theme';
        }
    });

    return button;
};

const ThemesButtonsRowOne = () => {
    // -----------------------------------
    // ---------- Theme Buttons ----------
    // -----------------------------------
    const blackHoleTheme = ThemeButton({
        label: 'ثقب',
        icon: '󰇩',
        theme: BLACK_HOLE_THEME,
    });

    const deerTheme = ThemeButton({
        label: 'غزال',
        icon: '',
        theme: DEER_THEME,
    });

    const colorTheme = ThemeButton({
        label: 'جمالي',
        icon: '',
        theme: COLOR_THEME,
        end: '',
    });

    const siberianTheme = ThemeButton({
        label: 'تدرج',
        icon: '',
        theme: SIBERIAN_THEME,
    });

    const materialYouTheme = ThemeButton({
        label: 'مادي',
        icon: '',
        theme: MATERIAL_YOU,
    });

    const win20Theme = ThemeButton({
        label: 'ويندوز',
        icon: '',
        theme: WIN_20,
        end: '',
    });

    const gameTheme = ThemeButton({
        label: 'لعبة',
        icon: '',
        theme: GAME_THEME,
    });

    const darkTheme = ThemeButton({
        label: 'مظلم',
        icon: '󱀝',
        theme: DARK_THEME,
    });

    const unicatTheme = ThemeButton({
        label: 'قط',
        icon: '',
        theme: UNICAT_THEME,
        end: '',
    });

    const newCatTheme = ThemeButton({
        label: 'قط',
        icon: '',
        theme: NEW_CAT_THEME,
    });

    const goldenTheme = ThemeButton({
        label: 'ذهبي',
        icon: '󰉊',
        theme: GOLDEN_THEME,
    });

    const harmonyTheme = ThemeButton({
        label: 'تناغم',
        icon: '󰔉',
        theme: HARMONY_THEME,
        end: '',
    });

    const circlesTheme = ThemeButton({
        label: 'دوائر',
        icon: '',
        theme: CIRCLES_THEME,
    });

    const whiteFlower = ThemeButton({
        label: 'ابيض',
        icon: '',
        theme: WHITE_FLOWER,
    });

    const dynamicTheme = Widget.Box({
        children: [
            ThemeButton({
                label: '',
                icon: '',
                theme: DYNAMIC_M3_DARK,
                label_css: 'unset',
                icon_css: 'dynamic-theme-btn-icon',
                css: `
          min-height: 2rem;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;

          border-top-left-radius: 0rem;
          border-bottom-left-radius: 0rem;
        `,
            }),
            ThemeButton({
                label: '',
                icon: '',
                theme: DYNAMIC_M3_LIGHT,
                label_css: 'unset',
                icon_css: 'dynamic-theme-btn-icon',
                css: `
            min-height: 2rem;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;

            border-top-right-radius: 0rem;
            border-bottom-right-radius: 0rem;
        `,
                end: '',
            }),
        ],
    });

    // --------------------------
    // ---------- ROWS ----------
    // --------------------------
    const row1 = Box({
        children: [blackHoleTheme, deerTheme, colorTheme],
    });
    const row2 = Box({
        css: `
        margin-top: 1rem;
    `,
        children: [siberianTheme, materialYouTheme, win20Theme],
    });
    const row3 = Box({
        css: `
        margin-top: 1rem;
    `,
        children: [gameTheme, darkTheme, unicatTheme],
    });
    const row4 = Box({
        css: `
        margin-top: 1rem;
    `,
        children: [newCatTheme, goldenTheme, harmonyTheme],
    });
    const row5 = Box({
        css: `
        margin-top: 1rem;
    `,
        children: [circlesTheme, whiteFlower, dynamicTheme],
    });

    return Box({
        className: 'themes-box',
        vertical: true,
        children: [row1, row2, row3, row4, row5],
    });
};

const PowerButtonsRow = () => {
    const powerBtnMargin =
        local === 'RTL' ? 'margin-left: 1rem;' : 'margin-right: 1rem;';

    const powerOff = Button({
        className: 'theme-btn',
        css: `
        min-width: 5rem;
        min-height: 2rem;
        border-radius: 1rem;
        ${powerBtnMargin}
    `,
        child: Label({
            label: '',
        }),
        onClicked: () => execAsync('poweroff').catch(print),
    });

    const reboot = Button({
        className: 'theme-btn',
        css: `
        min-width: 5rem;
        min-height: 2rem;
        border-radius: 1rem;
        ${powerBtnMargin}
    `,
        child: Label({
            label: '',
        }),
        onClicked: () => execAsync('reboot').catch(print),
    });

    const logout = Button({
        className: 'theme-btn',
        css: `
        min-width: 5rem;
        min-height: 2rem;
        border-radius: 1rem;
    `,
        child: Label({
            label: '',
        }),
        onClicked: () => execAsync('loginctl kill-session self').catch(print),
    });

    const row1 = Box({
        children: [powerOff, reboot, logout],
    });

    return Box({
        className: 'power-box unset',
        css: `
        margin-top:0rem;
    `,
        vertical: true,
        children: [row1],
    });
};

const widgets = Box({
    className: 'left-menu-box unset',
    vertical: true,
    children: [
        Header(),
        Profile(),
        ThemesButtonsRowOne(),
        MusicPLayer('left-menu-music-wd'),
        PowerButtonsRow(),
    ],
});

const menuRevealer = Revealer({
    transition: 'slide_down',
    child: widgets,
});

export const LeftMenu = ({ monitor } = {}) =>
    Window({
        name: `left_menu_${monitor}`,
        margins: [0, 0, 0, 0],
        // layer: 'overlay',
        anchor: ['top', local === 'RTL' ? 'left' : 'right'],
        child: Box({
            // className: "left-menu-window",
            css: `
            min-height: 2px;
        `,
            children: [menuRevealer],
        }),
    });

export const MenuButton = () =>
    Button({
        className: 'menu-button unset',
        label: '',
        onClicked: () => {
            menuRevealer.revealChild = !menuRevealer.revealChild;
            changeMenuBtn();
        },
    });

globalThis.showLeftMenu = () => {
    menuRevealer.revealChild = !menuRevealer.revealChild;
    changeMenuBtn();
};

function changeMenuBtn() {
    if (menuRevealer.revealChild) {
        MenuButton.label = '';
    } else {
        MenuButton.label = '';
    }
}

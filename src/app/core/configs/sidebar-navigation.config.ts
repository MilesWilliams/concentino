import { SidebarNavigationInterface } from "../interfaces/sidebar-nav.interface";


export const SidebarNavigation: SidebarNavigationInterface[] = [
    {
        section_title: 'Browse Music',
        nav_items: [
            {
                active: true,
                icon: 'home',
                label: 'Home',
                route: '',
            },
            {
                active: false,
                icon: 'recommendations',
                label: 'Recommendations',
                route: 'recommendations',
            },
            {
                active: false,
                icon: 'new-releases',
                label: 'New Releases',
                route: 'new-releases',
            },
            {
                active: false,
                icon: 'top-charts',
                label: 'Top Charts',
                route: 'top-charts',
            },
            {
                active: false,
                icon: 'radio',
                label: 'Radio',
                route: 'radio',
            },
            {
                active: false,
                icon: 'feed',
                label: 'Feed',
                route: 'feed',
            }
        ]
    },
    {
        section_title: 'Your Music',
        nav_items: [
            {
                active: false,
                icon: 'favourites',
                label: 'Favourites',
                route: 'favourites',
            },
            {
                active: false,
                icon: 'history',
                label: 'History',
                route: 'history',
            },
            {
                active: false,
                icon: 'artist',
                label: 'Artists',
                route: 'artists',
            },
            {
                active: false,
                icon: 'album',
                label: 'Albums',
                route: 'albums',
            },
            {
                active: false,
                icon: 'song',
                label: 'Songs',
                route: 'songs',
            },
        ]
    },
    {
        section_title: 'Your Playlists',
        nav_items: [
        ]
    }
];

export const ConcentinoIcons = {
    'home': function() { return `
        <svg width="19px" height="14px" viewBox="0 0 19 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path d="M4.31818182,13.8181818 L4.31818182,0 L14.6818182,0 L14.6818182,13.8181818 L4.31818182,13.8181818 Z M5.18181818,12.9545455 L13.8181818,12.9545455 L13.8181818,0.863636364 L5.18181818,0.863636364 L5.18181818,12.9545455 Z M16.4090909,2.59090909 L17.2727273,2.59090909 L17.2727273,11.2272727 L16.4090909,11.2272727 L16.4090909,2.59090909 Z M2.59090909,11.2272727 L1.72727273,11.2272727 L1.72727273,2.59090909 L2.59090909,2.59090909 L2.59090909,11.2272727 Z M0.863636364,9.5 L0,9.5 L0,4.31818182 L0.863636364,4.31818182 L0.863636364,9.5 Z M19,9.5 L18.1363636,9.5 L18.1363636,4.31818182 L19,4.31818182 L19,9.5 Z" id="path-1"></path>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Macbook-pro-15" transform="translate(-25.000000, -159.000000)">
                <g id="navigation/desktop/mainMenu">
                    <g id="sections" transform="translate(0.000000, 107.000000)">
                        <g id="section">
                            <g id="sectionElements" transform="translate(0.000000, 37.000000)">
                                <g id="Group-8" transform="translate(25.000000, 12.000000)">
                                    <g id="ico/menu/charts-copy-3" transform="translate(0.000000, 3.000000)">
                                        <mask id="mask-2" fill="white">
                                            <use xlink:href="#path-1"></use>
                                        </mask>
                                        <use id="Combined-Shape" fill="#32486C" xlink:href="#path-1"></use>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
        </svg>
    `},
    'recommendations':  function() { 
        return`
        <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -204.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section">
                                <g id="sectionElements" transform="translate(0.000000, 37.000000)">
                                    <g id="Group-7" transform="translate(26.000000, 60.000000)">
                                        <g id="ico/menu/charts-copy-2">
                                            <path d="M9.5,18.05 C14.2220346,18.05 18.05,14.2220346 18.05,9.5 C18.05,4.77796539 14.2220346,0.95 9.5,0.95 C4.77796539,0.95 0.95,4.77796539 0.95,9.5 C0.95,14.2220346 4.77796539,18.05 9.5,18.05 Z M9.5,19 C4.25329488,19 0,14.7467051 0,9.5 C0,4.25329488 4.25329488,0 9.5,0 C14.7467051,0 19,4.25329488 19,9.5 C19,14.7467051 14.7467051,19 9.5,19 Z M8.23704094,8.23704094 L6.97408189,12.0259181 L10.7629591,10.7629591 L12.0259181,6.97408189 L8.23704094,8.23704094 Z M13.528,5.472 L11.514,11.514 L5.472,13.528 L7.486,7.486 L13.528,5.472 Z" id="Combined-Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'new-releases':  function() { 
        return `
        <svg width="18px" height="19px" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-27.000000, -248.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section">
                                <g id="sectionElements" transform="translate(0.000000, 37.000000)">
                                    <g id="Group-9" transform="translate(27.000000, 104.000000)">
                                        <path d="M5.7,2.85 L5.7,4.75 L4.75,4.75 L4.75,2.85 L1.9,2.85 C1.37532949,2.85 0.95,3.27532949 0.95,3.8 L0.95,17.1 C0.95,17.6246705 1.37532949,18.05 1.9,18.05 L15.2,18.05 C15.7246705,18.05 16.15,17.6246705 16.15,17.1 L16.15,8.55 L0.95,8.55 L0.95,7.6 L16.15,7.6 L16.15,3.8 C16.15,3.27532949 15.7246705,2.85 15.2,2.85 L12.35,2.85 L12.35,4.75 L11.4,4.75 L11.4,2.85 L5.7,2.85 Z M5.7,1.9 L11.4,1.9 L11.4,0 L12.35,0 L12.35,1.9 L15.2,1.9 C16.249341,1.9 17.1,2.75065898 17.1,3.8 L17.1,17.1 C17.1,18.149341 16.249341,19 15.2,19 L1.9,19 C0.850658975,19 0,18.149341 0,17.1 L0,3.8 C0,2.75065898 0.850658975,1.9 1.9,1.9 L4.75,1.9 L4.75,0 L5.7,0 L5.7,1.9 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'top-charts':  function() { 
        return `
        <svg width="20px" height="11px" viewBox="0 0 20 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -296.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section">
                                <g id="sectionElements" transform="translate(0.000000, 37.000000)">
                                    <g id="Group-10" transform="translate(26.000000, 148.000000)">
                                        <path d="M18.5487805,5.62701017 L11.6226218,12.6184451 C11.4365706,12.8060467 11.1332742,12.8060467 10.947223,12.6184451 L6.96119736,8.59920262 L0.813309222,14.7983232 C0.628344345,14.9848294 0.327207496,14.9860789 0.140701245,14.8011141 C-0.0458050057,14.6161492 -0.0470545362,14.3150123 0.137910341,14.1285061 L6.62349792,7.58887195 C6.80954911,7.40127032 7.1128456,7.40127032 7.2988968,7.58887195 L11.2849224,11.6081144 L17.8793169,4.95121951 L13.7926829,4.95121951 L13.7926829,4 L19.5,4 L19.5,4.95121951 L19.5,9.70731707 L18.5487805,9.70731707 L18.5487805,5.62701017 Z" id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'radio':  function() { 
        return `
        <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -336.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section">
                                <g id="sectionElements" transform="translate(0.000000, 37.000000)">
                                    <g id="Group-11" transform="translate(26.000000, 192.000000)">
                                        <path d="M16.5861484,15.8275752 L16.0194296,15.3211863 C17.4409845,13.730271 18.24,11.6777779 18.24,9.5 C18.24,4.67303129 14.3269687,0.76 9.5,0.76 C4.67303129,0.76 0.76,4.67303129 0.76,9.5 C0.76,11.6787766 1.55975263,13.7321411 2.98248374,15.3233268 L2.41593026,15.8299008 C0.869795792,14.1007004 0,11.8675001 0,9.5 C0,4.25329488 4.25329488,0 9.5,0 C14.7467051,0 19,4.25329488 19,9.5 C19,11.8664144 18.1310056,14.0986677 16.5861484,15.8275752 Z M14.4232748,13.682648 L13.8443011,13.1903173 C14.7144403,12.1670464 15.2,10.871504 15.2,9.5 C15.2,6.35197693 12.6480231,3.8 9.5,3.8 C6.35197693,3.8 3.8,6.35197693 3.8,9.5 C3.8,10.8681999 4.28321036,12.160839 5.14954203,13.1830648 L4.56975218,13.674434 C3.58813276,12.5161747 3.04,11.0498613 3.04,9.5 C3.04,5.93224052 5.93224052,3.04 9.5,3.04 C13.0677595,3.04 15.96,5.93224052 15.96,9.5 C15.96,11.0536067 15.4092034,12.5232103 14.4232748,13.682648 Z M7.22,17.86 L11.78,17.86 L11.78,16.34 C11.78,15.0807908 10.7592092,14.06 9.5,14.06 C8.24079077,14.06 7.22,15.0807908 7.22,16.34 L7.22,17.86 Z M9.5,13.3 C11.1789456,13.3 12.54,14.6610544 12.54,16.34 L12.54,18.62 L6.46,18.62 L6.46,16.34 C6.46,14.6610544 7.82105436,13.3 9.5,13.3 Z M9.5,12.16 C8.03092257,12.16 6.84,10.9690774 6.84,9.5 C6.84,8.03092257 8.03092257,6.84 9.5,6.84 C10.9690774,6.84 12.16,8.03092257 12.16,9.5 C12.16,10.9690774 10.9690774,12.16 9.5,12.16 Z M9.5,11.4 C10.549341,11.4 11.4,10.549341 11.4,9.5 C11.4,8.45065898 10.549341,7.6 9.5,7.6 C8.45065898,7.6 7.6,8.45065898 7.6,9.5 C7.6,10.549341 8.45065898,11.4 9.5,11.4 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'feed' :  function() { 
        return `
        <svg width="19px" height="16px" viewBox="0 0 19 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -382.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section">
                                <g id="sectionElements" transform="translate(0.000000, 37.000000)">
                                    <g id="Group-12" transform="translate(26.000000, 236.000000)">
                                        <g id="ico/menu/stations-copy" transform="translate(0.000000, 2.000000)">
                                            <path d="M10,16 L9,16 L9,15.7638935 C8.46924351,15.2888536 7.76835444,15 7,15 L0,15 L0,0 L6,0 C7.50601337,0 8.81763554,0.832287643 9.5,2.06199641 C10.1823645,0.832287643 11.4939866,0 13,0 L19,0 L19,15 L12,15 C11.2316456,15 10.5307565,15.2888536 10,15.7638935 L10,16 Z M9,14.5351288 L9,4 C9,2.34314575 7.65685425,1 6,1 L1,1 L1,14 L7,14 C7.72857429,14 8.41165327,14.1947886 9,14.5351288 Z M10,4 L10,14.5351288 C10.5883467,14.1947886 11.2714257,14 12,14 L18,14 L18,1 L13,1 C11.3431458,1 10,2.34314575 10,4 Z" id="Combined-Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>`
    },
    'favourites':  function() { 
        return `
        <svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -499.000000)" fill="#5D6C76">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section-2" transform="translate(24.000000, 342.000000)">
                                <g id="sectionElements" transform="translate(2.000000, 49.000000)">
                                    <g id="Group-14">
                                        <g id="ico/menu/history-copy" transform="translate(0.000000, 1.000000)">
                                            <path d="M16.819428,7.71106628 C18.1389902,6.21786282 18.1440236,4.03107108 16.8314477,2.53230535 C15.4805071,0.989732721 13.0900056,0.761540731 11.4481001,2.0232878 C11.0209567,2.35154022 10.6449779,2.6607187 10.3192242,2.95133341 L9.48547996,3.69514184 L8.69231538,2.90820451 C8.42475404,2.64274385 8.11973189,2.3705145 7.77665788,2.09138045 C6.10359874,0.730091749 3.59790109,0.929748317 2.18139357,2.5329942 C0.857859524,4.03100989 0.856015253,6.22552417 2.17699319,7.7255804 L9.47897286,16.0174525 L16.819428,7.71106628 Z M10.7245109,1.08170665 C12.8618239,-0.560743734 15.960177,-0.264984876 17.7247911,1.74994101 C19.4309301,3.69809716 19.4243505,6.5566426 17.7092601,8.49742181 L9.47741157,17.8125 L1.2857945,8.51038685 C-0.430748228,6.5611411 -0.428338069,3.69327271 1.29147868,1.74673231 C3.13069636,-0.334949649 6.35994211,-0.592255933 8.52612587,1.17026483 C8.89733433,1.47228981 9.23152871,1.77038534 9.52868893,2.0652125 C9.87828954,1.75332323 10.2767539,1.42580033 10.7245109,1.08170665 Z" id="Path"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'history':  function() { 
        return `
        <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -542.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section-2" transform="translate(24.000000, 342.000000)">
                                <g id="sectionElements" transform="translate(2.000000, 49.000000)">
                                    <g id="Group-13" transform="translate(0.000000, 44.000000)">
                                        <g id="ico/menu/history">
                                            <path d="M10.45,1.00218234 L10.45,3.8 L9.5,3.8 L9.5,0 L9.95626046,0 L10.45,0.0446327209 L10.45,0.0469064805 C15.2506566,0.523544689 19,4.5739193 19,9.5 C19,14.7467051 14.7467051,19 9.5,19 C4.25329488,19 0,14.7467051 0,9.5 C0,7.71034256 0.494870998,6.03626843 1.35523751,4.6071531 L2.16912693,5.09713678 C1.37537017,6.41560971 0.95,7.92545213 0.95,9.5 C0.95,14.2220346 4.77796539,18.05 9.5,18.05 C14.2220346,18.05 18.05,14.2220346 18.05,9.5 C18.05,5.09907403 14.7249529,1.47475441 10.45,1.00218234 Z M8.55098268,9.54359885 L4.44406405,7.10674428 L4.92883634,6.2897401 L8.9891182,8.69892258 C9.13664116,8.60464485 9.31193909,8.55 9.5,8.55 C10.0246705,8.55 10.45,8.97532949 10.45,9.5 C10.45,10.0246705 10.0246705,10.45 9.5,10.45 C8.98994184,10.45 8.57376836,10.0480319 8.55098268,9.54359885 Z" id="Path"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'playlist':  function() { 
        return `
        <svg width="23px" height="19px" viewBox="0 0 23 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-25.000000, -778.000000)" fill="#32486C">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section-3-copy" transform="translate(24.000000, 622.000000)">
                                <g id="sectionElements" transform="translate(1.000000, 24.000000)">
                                    <g id="Group-3" transform="translate(0.000000, 25.000000)">
                                        <path d="M15,0.5 L15,1.5 L0,1.5 L0,0.5 L15,0.5 Z M15,4.5 L15,5.5 L-1.77635684e-15,5.5 L0,4.5 L15,4.5 Z M11,8.5 L11,9.5 L-1.77635684e-15,9.5 L-1.77635684e-15,8.5 L11,8.5 Z M11,12.5 L11,13.5 L-1.77635684e-15,13.5 L-1.77635684e-15,12.5 L11,12.5 Z M15,16.7958275 L20.9496922,13.4718018 L15,10.147776 L15,16.7958275 Z M14,8.44360352 L23,13.4718018 L14,18.5 L14,8.44360352 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'artist':  function() { 
        return `
        <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -586.000000)" fill="#32486C" fill-rule="nonzero">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section-2" transform="translate(24.000000, 342.000000)">
                                <g id="sectionElements" transform="translate(2.000000, 49.000000)">
                                    <g id="Group-23" transform="translate(0.000000, 88.000000)">
                                        <g id="0718-mic2">
                                            <path d="M18.9004762,14.6462857 L11.7537619,5.71357143 C11.7582857,5.61947619 11.761,5.52447619 11.761,5.42947619 C11.761,2.43652381 9.32538095,0.000904761905 6.33242857,0.000904761905 C3.33947619,0.000904761905 0.903857143,2.43652381 0.903857143,5.42947619 C0.903857143,7.22271429 1.77785714,8.81509524 3.12233333,9.80490476 C3.14495238,9.82571429 3.16938095,9.84290476 3.19561905,9.85828571 C4.08228571,10.488 5.16438095,10.8580476 6.33152381,10.8580476 C6.42652381,10.8580476 6.52152381,10.8553333 6.61561905,10.8508095 L15.5483333,17.9975238 C15.6297619,18.0626667 15.7292857,18.0970476 15.830619,18.0970476 C15.868619,18.0970476 15.9057143,18.0925238 15.9437143,18.0825714 C16.6458095,17.901619 17.309,17.514381 17.8618095,16.9615714 C18.414619,16.4087619 18.8018571,15.7455714 18.9828095,15.0434762 C19.0180952,14.9059524 18.9864286,14.759381 18.8977619,14.6480952 L18.9004762,14.6462857 Z M1.80952381,5.42857143 C1.80952381,2.93414286 3.83890476,0.904761905 6.33333333,0.904761905 C7.7827619,0.904761905 9.0747619,1.58966667 9.90352381,2.65366667 C9.51719048,5.98047619 6.88252381,8.61333333 3.55842857,8.9987619 C2.49442857,8.17 1.80952381,6.878 1.80952381,5.42857143 Z M4.79614286,9.68366667 C7.62080952,8.93904762 9.84290476,6.7187619 10.5884286,3.89228571 C10.7621429,4.37271429 10.8571429,4.88933333 10.8571429,5.42947619 C10.8571429,7.92390476 8.8277619,9.95328571 6.33333333,9.95328571 C5.79409524,9.95328571 5.27657143,9.85828571 4.79614286,9.68457143 L4.79614286,9.68366667 Z M15.9310476,17.141619 L7.81714286,10.6508571 C9.61942857,10.1378571 11.042619,8.71466667 11.555619,6.91238095 L18.046381,15.0262857 C17.7197619,15.9862381 16.891,16.815 15.9310476,17.141619 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'album':  function() { 
        return `
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -630.000000)" fill="#32486C" fill-rule="nonzero">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section-2" transform="translate(24.000000, 342.000000)">
                                <g id="sectionElements" transform="translate(2.000000, 49.000000)">
                                    <g id="Group-22" transform="translate(0.000000, 132.000000)">
                                        <g id="ic-album-24px">
                                            <path d="M10.0833333,0.583333333 C4.83933333,0.583333333 0.583333333,4.83933333 0.583333333,10.0833333 C0.583333333,15.3273333 4.83933333,19.5833333 10.0833333,19.5833333 C15.3273333,19.5833333 19.5833333,15.3273333 19.5833333,10.0833333 C19.5833333,4.83933333 15.3273333,0.583333333 10.0833333,0.583333333 Z M10.0833333,14.3583333 C7.71783333,14.3583333 5.80833333,12.4488333 5.80833333,10.0833333 C5.80833333,7.71783333 7.71783333,5.80833333 10.0833333,5.80833333 C12.4488333,5.80833333 14.3583333,7.71783333 14.3583333,10.0833333 C14.3583333,12.4488333 12.4488333,14.3583333 10.0833333,14.3583333 Z M10.0833333,9.13333333 C9.56083333,9.13333333 9.13333333,9.56083333 9.13333333,10.0833333 C9.13333333,10.6058333 9.56083333,11.0333333 10.0833333,11.0333333 C10.6058333,11.0333333 11.0333333,10.6058333 11.0333333,10.0833333 C11.0333333,9.56083333 10.6058333,9.13333333 10.0833333,9.13333333 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
    'song':  function() { 
        return `
        <svg width="19px" height="22px" viewBox="0 0 19 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Macbook-pro-15" transform="translate(-26.000000, -675.000000)" fill="#32486C" fill-rule="nonzero">
                    <g id="navigation/desktop/mainMenu">
                        <g id="sections" transform="translate(0.000000, 107.000000)">
                            <g id="section-2" transform="translate(24.000000, 342.000000)">
                                <g id="sectionElements" transform="translate(2.000000, 49.000000)">
                                    <g id="Group-20" transform="translate(0.000000, 177.000000)">
                                        <g id="0229-music-note">
                                            <path d="M14.5666667,3.8 C12.8212,3.8 11.4,2.3788 11.4,0.633333333 C11.4,0.283733333 11.1162667,0 10.7666667,0 C10.4170667,0 10.1333333,0.283733333 10.1333333,0.633333333 L10.1333333,16.3387333 C9.96106667,16.2222 9.77106667,16.112 9.56586667,16.0094 C8.52213333,15.4875333 7.15033333,15.2 5.7,15.2 C4.24966667,15.2 2.87786667,15.4875333 1.83413333,16.0094 C0.651066667,16.6009333 0,17.4382 0,18.3666667 C0,19.2951333 0.651066667,20.1336667 1.83413333,20.7239333 C2.87786667,21.2458 4.24966667,21.5333333 5.7,21.5333333 C7.15033333,21.5333333 8.52213333,21.2458 9.56586667,20.7239333 C10.7489333,20.1324 11.4,19.2951333 11.4,18.3666667 L11.4,3.73286667 C12.2056,4.55493333 13.3278667,5.06666667 14.5666667,5.06666667 C16.3121333,5.06666667 17.7333333,6.48786667 17.7333333,8.23333333 C17.7333333,8.58293333 18.0170667,8.86666667 18.3666667,8.86666667 C18.7162667,8.86666667 19,8.58293333 19,8.23333333 C19,5.78866667 17.0113333,3.8 14.5666667,3.8 Z M5.7,20.2666667 C3.16286667,20.2666667 1.26666667,19.2634667 1.26666667,18.3666667 C1.26666667,17.4698667 3.16286667,16.4666667 5.7,16.4666667 C8.23713333,16.4666667 10.1333333,17.4698667 10.1333333,18.3666667 C10.1333333,19.2634667 8.23713333,20.2666667 5.7,20.2666667 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    `},
}

import React from 'react';
import styles from 'styles/components/atoms/Trending.module.scss'

interface LogoBadgeProps {
    width: number;
    height: number;
}

const Trending: React.FC<LogoBadgeProps> = ({ width, height }) => {
    return (
        <div className={styles.TrendingBadge}>

            <svg className={styles.TrendingLogo} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 88 88" fill="#111">
                <path d="M51.9052 39.7656C51.9052 39.7656 51.9052 39.7912 51.9052 39.8083C51.9002 40.9219 51.757 42.0306 51.4788 43.109C52.6211 44.6832 53.2177 46.5876 53.1777 48.5323C53.1377 50.4769 52.4632 52.3552 51.257 53.8811H35.5339C34.5581 52.6916 33.9163 51.2639 33.6746 49.7445C33.4188 48.1604 33.5961 46.5365 34.1876 45.0449C34.7792 43.5532 35.763 42.2493 37.035 41.271C39.6975 39.2584 41.4681 36.285 41.969 32.9851C43.3224 33.4722 44.5004 34.3509 45.353 35.5093C46.2056 36.6678 46.6943 38.0537 46.7569 39.4908C46.8196 40.9278 46.4533 42.351 45.7048 43.5793C44.9562 44.8076 43.8591 45.7854 42.5532 46.3884V49.1347C44.7716 48.4124 46.6599 46.923 47.8792 44.9339C49.0984 42.9448 49.5686 40.5862 49.2055 38.2816C48.8424 35.977 47.6696 33.8774 45.8979 32.3595C44.1261 30.8417 41.8713 30.0051 39.5382 30V31.2793C39.5164 32.8313 39.1377 34.3573 38.4315 35.7394C37.7253 37.1216 36.7105 38.3226 35.4657 39.2496C34.2104 40.213 33.1691 41.4268 32.4078 42.8141C31.6466 44.2013 31.1821 45.7316 31.0437 47.3079C30.9054 48.8842 31.0962 50.4721 31.6042 51.9707C32.1122 53.4693 32.9261 54.846 33.9944 56.0133L34.374 56.4397H52.4255L52.805 56.0133C53.8144 54.8882 54.592 53.575 55.0932 52.149C55.5944 50.7229 55.8094 49.212 55.7258 47.7028C55.6422 46.1936 55.2617 44.7156 54.6061 43.3537C53.9505 41.9917 53.0327 40.7724 51.9052 39.7656Z" />
            </svg>

            <svg className={styles.circularMotion} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 88 89" fill="#111">
                <path d="M0.480003 37.9804L1.9 38.0704L1.71001 41.1304L9.88 41.6604L9.78001 43.0804L1.62 42.5604L1.42001 45.5604L0 45.4704L0.480003 37.9804Z" />
                <path d="M10.28 37.7904L1.08 34.9904L2.08 31.6104C2.21903 31.1352 2.48939 30.7088 2.86 30.3804C3.23173 30.0518 3.68258 29.8255 4.16824 29.7238C4.65389 29.6221 5.15765 29.6485 5.63 29.8004C6.03398 29.9178 6.40876 30.1188 6.73 30.3904C7.03053 30.6516 7.26957 30.976 7.43 31.3404C7.60644 31.691 7.69888 32.0779 7.7 32.4704L12.23 31.4704L11.74 33.0604L7.38 34.0604L6.99001 35.3204L10.7 36.4704L10.28 37.7904ZM5.62 34.8804L6.23 33.0104C6.30501 32.7558 6.30501 32.485 6.23 32.2304C6.16344 31.9772 6.03648 31.7439 5.86 31.5504C5.67367 31.3559 5.43899 31.2144 5.18 31.1404C4.92583 31.0547 4.65325 31.0392 4.391 31.0955C4.12875 31.1518 3.88656 31.2779 3.69 31.4604C3.4938 31.6373 3.35166 31.8661 3.28001 32.1204L2.71001 33.9904L5.62 34.8804Z" />
                <path d="M12.65 30.5604L4.23 25.8504L7.23 20.6504L8.48 21.3504L6.25 25.3504L8.23 26.4704L10.02 23.2804L11.27 23.9804L9.48 27.1704L12.1 28.6404L14.33 24.6404L15.57 25.3404L12.65 30.5604Z" />
                <path d="M16.09 24.5204L8.98 18.0504L9.98 16.9104L18.23 18.3804L13.03 13.6404L14.03 12.5904L21.14 19.0604L20.14 20.2104L11.97 18.7304L17.05 23.4704L16.09 24.5204Z" />
                <path d="M21.88 18.3504L16.61 10.3504L19.23 8.57042C19.758 8.22228 20.35 7.98284 20.9716 7.86608C21.5931 7.74933 22.2317 7.7576 22.85 7.89042C24.0821 8.15568 25.1599 8.89583 25.85 9.95042C26.2024 10.4871 26.4438 11.0889 26.56 11.7204C26.6738 12.3285 26.6738 12.9524 26.56 13.5604C26.4318 14.1713 26.1874 14.7518 25.84 15.2704C25.4841 15.8028 25.0251 16.2585 24.49 16.6104L21.88 18.3504ZM22.29 16.3504L23.75 15.3504C24.1471 15.117 24.4884 14.7996 24.75 14.4204C24.9897 14.0549 25.1593 13.648 25.25 13.2204C25.3349 12.7912 25.3349 12.3496 25.25 11.9204C25.0803 11.0253 24.5624 10.2341 23.81 9.72042C23.0753 9.23034 22.178 9.04728 21.31 9.21042C20.8651 9.2846 20.4419 9.45526 20.07 9.71042L18.6 10.7104L22.29 16.3504Z" />
                <path d="M29.61 13.7504L25.82 4.92042L27.14 4.36042L30.92 13.1904L29.61 13.7504Z" />
                <path d="M32.23 12.4704L30.04 3.11042L31.55 2.75042L37.45 8.59042L35.84 1.75042L37.23 1.47042L39.43 10.8304L37.92 11.1804L32.02 5.35042L33.62 12.1904L32.23 12.4704Z" />
                <path d="M44.9 10.9604C44.267 10.9405 43.6452 10.7878 43.075 10.5122C42.5048 10.2365 41.9988 9.84413 41.59 9.36042C41.1779 8.88036 40.8591 8.32755 40.65 7.73042C40.435 7.10723 40.34 6.44897 40.37 5.79042C40.3857 5.13191 40.5326 4.48315 40.8022 3.88215C41.0718 3.28116 41.4586 2.74001 41.94 2.29042C42.389 1.8575 42.9192 1.51764 43.5 1.29042C44.1189 1.05084 44.7831 0.950822 45.4452 0.997494C46.1072 1.04417 46.7508 1.23638 47.33 1.56042C48.0008 1.93122 48.568 2.4641 48.98 3.11042L47.68 3.75042C47.3905 3.33732 47.011 2.99538 46.57 2.75042C46.1509 2.55506 45.6923 2.45923 45.23 2.47042C44.7955 2.44721 44.3614 2.52242 43.96 2.69042C43.5527 2.85146 43.1819 3.09293 42.87 3.40042C42.5492 3.71778 42.2884 4.09042 42.1 4.50042C41.9058 4.94266 41.7972 5.41772 41.78 5.90042C41.7569 6.37311 41.8283 6.84565 41.99 7.29042C42.2705 8.1522 42.8771 8.87003 43.68 9.29042C44.0776 9.49075 44.5149 9.60006 44.96 9.61042C45.2978 9.62905 45.6362 9.58844 45.96 9.49042C46.2768 9.38864 46.5768 9.24035 46.85 9.05042C47.1264 8.85422 47.3724 8.61835 47.58 8.35042C47.7921 8.06375 47.9669 7.75124 48.1 7.42042L46.1 7.34042L46.15 6.08042L49.86 6.22042C49.848 6.88291 49.7017 7.53608 49.43 8.14042C49.1716 8.72387 48.8052 9.25317 48.35 9.70042C47.9056 10.1296 47.3828 10.4691 46.81 10.7004C46.201 10.9298 45.5481 11.0187 44.9 10.9604Z" />
                <path d="M58.23 10.6904C58.1078 10.6415 57.9973 10.5672 57.9059 10.4723C57.8146 10.3775 57.7444 10.2644 57.7 10.1404C57.65 10.0171 57.6251 9.88509 57.6268 9.75206C57.6285 9.61902 57.6567 9.48765 57.7098 9.36565C57.7628 9.24366 57.8397 9.13348 57.9359 9.04157C58.0321 8.94967 58.1457 8.87788 58.27 8.83042C58.3894 8.77628 58.5189 8.74828 58.65 8.74828C58.7811 8.74828 58.9106 8.77628 59.03 8.83042C59.152 8.88167 59.2626 8.95661 59.3554 9.05091C59.4482 9.1452 59.5213 9.25697 59.5706 9.37975C59.6199 9.50252 59.6444 9.63386 59.6426 9.76615C59.6407 9.89844 59.6127 10.0291 59.56 10.1504C59.5086 10.2751 59.4325 10.3881 59.3362 10.4827C59.24 10.5772 59.1256 10.6513 59 10.7004C58.8774 10.7497 58.7462 10.7742 58.614 10.7725C58.4818 10.7708 58.3513 10.7429 58.23 10.6904Z" />
                <path d="M73.23 12.6704L72.35 13.8004L69.94 11.9104L64.94 18.3604L63.81 17.4704L68.81 11.0204L66.4 9.14042L67.28 8.01042L73.23 12.6704Z" />
                <path d="M67.9 20.8804L75.4 14.8804L77.61 17.6304C77.9279 18.0122 78.1292 18.4774 78.19 18.9704C78.2555 19.4513 78.1934 19.941 78.01 20.3904C77.8234 20.8586 77.5163 21.2691 77.12 21.5804C76.792 21.8509 76.4102 22.0486 76 22.1604C75.6112 22.2452 75.2088 22.2452 74.82 22.1604C74.4314 22.0912 74.0628 21.9376 73.74 21.7104L72.07 26.0304L71.07 24.7404L72.69 20.5504L71.86 19.5504L68.86 21.9804L67.9 20.8804ZM72.9 18.6704L74.12 20.1904C74.2826 20.4 74.5009 20.5594 74.75 20.6504C75.0011 20.7408 75.2714 20.7643 75.5344 20.7187C75.7973 20.6732 76.0439 20.56 76.25 20.3904C76.4654 20.2248 76.6313 20.0035 76.73 19.7504C76.8271 19.5062 76.8579 19.2407 76.8193 18.9808C76.7806 18.7209 76.6739 18.4758 76.51 18.2704L75.28 16.7504L72.9 18.6704Z" />
                <path d="M72.53 26.8804L81.14 22.5904L83.8 27.9304L82.52 28.5704L80.52 24.5104L78.44 25.5104L80.07 28.7804L78.79 29.4204L77.16 26.1504L74.47 27.4904L76.47 31.5604L75.19 32.1904L72.53 26.8804Z" />
                <path d="M75.61 33.1304L84.96 30.9104L85.32 32.4104L79.49 38.3304L86.34 36.7104L86.67 38.1004L77.31 40.3204L76.96 38.8104L82.78 32.8904L75.94 34.5204L75.61 33.1304Z" />
                <path d="M77.44 41.4004L87.05 41.5804L86.99 44.7604C86.9823 45.402 86.8427 46.0351 86.58 46.6204C86.3265 47.1869 85.9667 47.6995 85.52 48.1304C85.0698 48.557 84.5442 48.8961 83.97 49.1304C83.3756 49.3665 82.7393 49.4788 82.1 49.4604C81.4589 49.4585 80.8253 49.3222 80.24 49.0604C79.6741 48.8059 79.1617 48.4462 78.73 48.0004C78.3002 47.5528 77.9607 47.0265 77.73 46.4504C77.4897 45.8535 77.374 45.2137 77.39 44.5704L77.44 41.4004ZM78.84 42.8604V44.6104C78.8292 45.058 78.9073 45.5033 79.07 45.9204C79.2385 46.3239 79.4791 46.6932 79.78 47.0104C80.4079 47.6422 81.2593 48.0014 82.15 48.0104C82.6019 48.0237 83.0517 47.9419 83.47 47.7704C83.8754 47.6057 84.2454 47.3646 84.56 47.0604C84.878 46.7566 85.1329 46.393 85.31 45.9904C85.4909 45.5807 85.5861 45.1383 85.59 44.6904V42.9404L78.84 42.8604Z" />
                <path d="M76.88 50.3904L86.31 52.2304L86.04 53.6404L76.61 51.7904L76.88 50.3904Z" />
                <path d="M76.46 53.2404L85.46 56.6904L84.9 58.1404L76.76 59.7304L83.32 62.2604L82.81 63.5904L73.81 60.1404L74.37 58.7004L82.52 57.1004L75.95 54.5804L76.46 53.2404Z" />
                <path d="M70.6 64.5704C70.9775 64.0508 71.4616 63.6178 72.02 63.3004C72.5621 62.9935 73.1609 62.7995 73.78 62.7304C75.0791 62.5935 76.3821 62.9505 77.43 63.7304C77.9814 64.1278 78.4445 64.6351 78.79 65.2204C79.4411 66.3079 79.6454 67.6055 79.36 68.8404C79.2242 69.4422 78.9617 70.0081 78.59 70.5004C78.1674 71.0712 77.6157 71.5338 76.98 71.8504C76.294 72.1906 75.5355 72.3588 74.77 72.3404L74.97 70.9004C75.4707 70.8879 75.9624 70.765 76.41 70.5404C76.8033 70.3188 77.1443 70.0153 77.41 69.6504C77.6685 69.2992 77.8492 68.8969 77.94 68.4704C78.0252 68.0413 78.0252 67.5996 77.94 67.1704C77.7738 66.2392 77.2498 65.4101 76.48 64.8604C76.1052 64.5745 75.6767 64.3671 75.22 64.2504C74.7879 64.1283 74.3356 64.0943 73.89 64.1504C73.4534 64.1965 73.0312 64.3327 72.65 64.5504C71.965 64.9295 71.4502 65.5553 71.21 66.3004C71.1104 66.6242 71.0631 66.9618 71.07 67.3004C71.0778 67.6402 71.1351 67.9771 71.24 68.3004C71.351 68.6551 71.5127 68.9919 71.72 69.3004L72.93 67.6604L73.93 68.4104L71.71 71.4104C70.655 70.6377 69.9387 69.488 69.71 68.2004C69.59 67.5896 69.59 66.9613 69.71 66.3504C69.863 65.6955 70.1679 65.0858 70.6 64.5704Z" />
                <path d="M66.04 73.8504C66.2492 73.6942 66.5112 73.626 66.77 73.6604C66.9038 73.6763 67.033 73.719 67.1498 73.786C67.2667 73.853 67.3688 73.943 67.45 74.0504C67.6088 74.2622 67.6771 74.5283 67.64 74.7904C67.6287 74.9204 67.5898 75.0464 67.526 75.1602C67.4622 75.274 67.3749 75.3729 67.27 75.4504C67.1659 75.5318 67.0466 75.5918 66.9192 75.6268C66.7917 75.6619 66.6586 75.6713 66.5275 75.6546C66.3963 75.6378 66.2698 75.5953 66.1553 75.5293C66.0407 75.4634 65.9404 75.3754 65.86 75.2704C65.7729 75.168 65.709 75.0479 65.6727 74.9185C65.6365 74.789 65.6287 74.6532 65.65 74.5204C65.6671 74.3884 65.7105 74.2611 65.7775 74.1461C65.8444 74.031 65.9337 73.9305 66.04 73.8504Z" />
                <path d="M57.03 86.0204L56.47 84.7104L59.29 83.5104L56.09 75.9804L57.41 75.4204L60.6 82.9604L63.42 81.7604L63.97 83.0804L57.03 86.0204Z" />
                <path d="M52.47 77.3404L54.08 86.8204L50.6 87.4104C50.1132 87.5018 49.6104 87.4532 49.15 87.2704C48.6955 87.0937 48.2954 86.8006 47.99 86.4204C47.6752 86.0269 47.4685 85.5582 47.39 85.0604C47.3008 84.6452 47.3008 84.2157 47.39 83.8004C47.4886 83.4165 47.6692 83.0585 47.9196 82.7512C48.1699 82.4439 48.4839 82.1946 48.84 82.0204L45.84 78.4604L47.47 78.1804L50.34 81.6304L51.63 81.4104L50.98 77.5804L52.47 77.3404ZM51.95 82.8204L50.02 83.1404C49.7614 83.1859 49.5197 83.2999 49.32 83.4704C49.122 83.6435 48.9708 83.8636 48.88 84.1104C48.7854 84.366 48.7612 84.6423 48.81 84.9104C48.855 85.1782 48.9687 85.4297 49.14 85.6404C49.3022 85.8437 49.5165 85.9992 49.76 86.0904C50.0078 86.1886 50.2787 86.2129 50.54 86.1604L52.47 85.8404L51.95 82.8204Z" />
                <path d="M44.96 78.4704L44.53 88.0804L38.53 87.8104L38.59 86.3804L43.13 86.5904L43.23 84.2704L39.58 84.1004L39.64 82.6804L43.29 82.8404L43.43 79.8404L38.89 79.6304L38.95 78.2104L44.96 78.4704Z" />
                <path d="M37.99 78.1204L35.4 87.3704L33.92 86.9604L31.56 78.9604L29.66 85.7304L28.29 85.3404L30.88 76.0904L32.37 76.5004L34.72 84.5004L36.62 77.7304L37.99 78.1204Z" />
                <path d="M29.88 75.7104L25.05 84.0304L22.3 82.4704C21.7432 82.1552 21.2593 81.7258 20.88 81.2104C20.5059 80.7106 20.2309 80.1437 20.07 79.5404C19.9163 78.9398 19.8756 78.3159 19.95 77.7004C20.0252 77.0644 20.233 76.4512 20.56 75.9004C20.8813 75.3451 21.3096 74.8591 21.82 74.4704C22.8181 73.6985 24.075 73.3404 25.33 73.4704C25.9667 73.5493 26.5798 73.7605 27.13 74.0904L29.88 75.7104ZM27.88 76.2304L26.37 75.3504C25.9799 75.1232 25.5479 74.977 25.1 74.9204C24.6648 74.8702 24.2241 74.9007 23.8 75.0104C23.3786 75.1228 22.9818 75.3127 22.63 75.5704C22.2719 75.8407 21.9725 76.1809 21.75 76.5704C21.5185 76.9558 21.3688 77.3847 21.31 77.8304C21.2013 78.7082 21.438 79.5938 21.97 80.3004C22.2368 80.6617 22.5777 80.9617 22.97 81.1804L24.48 82.0604L27.88 76.2304Z" />
                <path d="M22.3 70.8504L16.09 78.1904L15 77.2704L21.23 69.9304L22.3 70.8504Z" />
                <path d="M20.01 69.0904L12.65 75.2704L11.65 74.0804L14.23 66.1804L8.84 70.7004L7.92001 69.6004L15.23 63.4704L16.23 64.6504L13.71 72.4704L19.1 67.9604L20.01 69.0904Z" />
                <path d="M12.94 58.4704C13.2064 59.0456 13.3493 59.6703 13.3596 60.3041C13.37 60.9379 13.2475 61.5668 13 62.1504C12.7666 62.7311 12.4276 63.2634 12 63.7204C11.5384 64.1941 10.9924 64.5773 10.39 64.8504C9.79418 65.1293 9.14917 65.2879 8.49194 65.3171C7.83472 65.3463 7.1782 65.2454 6.56001 65.0204C5.97311 64.7934 5.43634 64.4537 4.98 64.0204C4.52059 63.6079 4.15268 63.1038 3.9 62.5404C3.60572 61.8915 3.46868 61.1823 3.5 60.4704C3.54234 59.7059 3.76508 58.9623 4.15 58.3004L5.31001 59.1804C5.0764 59.6221 4.94645 60.1111 4.93 60.6104C4.91413 61.0753 5.00657 61.5374 5.2 61.9604C5.38125 62.3456 5.64397 62.6868 5.97 62.9604C6.29774 63.2528 6.68249 63.4741 7.10001 63.6104C7.52667 63.76 7.97851 63.8246 8.43 63.8004C8.91093 63.7779 9.38295 63.6624 9.82 63.4604C10.2539 63.2705 10.6451 62.995 10.97 62.6504C11.2874 62.331 11.5359 61.9498 11.7 61.5304C11.8657 61.1272 11.9539 60.6963 11.96 60.2604C11.9569 59.8146 11.858 59.3747 11.67 58.9704C11.5352 58.6675 11.3492 58.3901 11.12 58.1504C10.8874 57.9156 10.6212 57.7168 10.33 57.5604C10.0163 57.396 9.67893 57.2813 9.33 57.2204C8.97848 57.1698 8.62153 57.1698 8.27 57.2204L9.12 59.0804L7.97 59.6004L6.43 56.2404C7.02855 55.9554 7.67781 55.7922 8.34 55.7604C8.9747 55.7334 9.60888 55.825 10.21 56.0304C10.8026 56.2269 11.3499 56.5397 11.82 56.9504C12.2978 57.3712 12.6797 57.8895 12.94 58.4704Z" />
                <path d="M7.04 49.9604C7.07793 50.2171 7.01465 50.4784 6.86351 50.6892C6.71238 50.9001 6.48522 51.0439 6.23001 51.0904C6.10023 51.1123 5.96731 51.1067 5.83983 51.074C5.71236 51.0413 5.59318 50.9821 5.49001 50.9004C5.38115 50.8265 5.28921 50.7304 5.22026 50.6184C5.1513 50.5063 5.10691 50.3809 5.09001 50.2504C5.07021 50.1197 5.07655 49.9863 5.10866 49.858C5.14077 49.7297 5.198 49.609 5.27706 49.503C5.35611 49.397 5.45541 49.3077 5.5692 49.2403C5.683 49.1729 5.80903 49.1288 5.94001 49.1104C6.07152 49.0892 6.20594 49.0944 6.3354 49.1259C6.46485 49.1573 6.58673 49.2143 6.69386 49.2935C6.80099 49.3726 6.89121 49.4724 6.95924 49.587C7.02727 49.7015 7.07173 49.8285 7.09001 49.9604H7.04Z" />
            </svg>

        </div>
    )
}

export default Trending

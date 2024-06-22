const xml = `
<svg width="140" height="164" viewBox="0 0 140 164" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64.6667 3.0792C67.9669 1.17378 72.0331 1.17378 75.3333 3.0792L106.236 20.9208C109.536 22.8262 111.569 26.3476 111.569 30.1584V65.8416C111.569 69.6524 109.536 73.1738 106.236 75.0792L75.3333 92.9208C72.0331 94.8262 67.9669 94.8262 64.6667 92.9208L33.7641 75.0792C30.4638 73.1738 28.4308 69.6524 28.4308 65.8416V30.1584C28.4308 26.3476 30.4638 22.8262 33.7641 20.9208L64.6667 3.0792Z" fill="#246BFD"/>
<path d="M66.6666 31.3335V61.3335" stroke="white" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.5" d="M60 41.3335V54.6668" stroke="white" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M53.3334 46.3335V49.6668" stroke="white" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.3334 34.6665V64.6665" stroke="white" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M80 41.3335V54.6668" stroke="white" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.3" d="M86.6666 46.3335V49.6668" stroke="white" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="111" cy="24" r="20" fill="url(#paint0_linear_62_184)"/>
<path d="M121 20.0784L118.083 17.3333L109.75 25.1764L105.583 21.2548L102.667 23.9999L109.75 30.6666L121 20.0784Z" fill="white"/>
<path d="M22.0725 126.08V130.6H14.6325V154H9.0325V130.6H1.5925V126.08H22.0725ZM24.7184 142.84C24.7184 140.6 25.1584 138.613 26.0384 136.88C26.9451 135.147 28.1584 133.813 29.6784 132.88C31.2251 131.947 32.9451 131.48 34.8384 131.48C36.4918 131.48 37.9318 131.813 39.1584 132.48C40.4118 133.147 41.4118 133.987 42.1584 135V131.84H47.7984V154H42.1584V150.76C41.4384 151.8 40.4384 152.667 39.1584 153.36C37.9051 154.027 36.4518 154.36 34.7984 154.36C32.9318 154.36 31.2251 153.88 29.6784 152.92C28.1584 151.96 26.9451 150.613 26.0384 148.88C25.1584 147.12 24.7184 145.107 24.7184 142.84ZM42.1584 142.92C42.1584 141.56 41.8918 140.4 41.3584 139.44C40.8251 138.453 40.1051 137.707 39.1984 137.2C38.2918 136.667 37.3184 136.4 36.2784 136.4C35.2384 136.4 34.2784 136.653 33.3984 137.16C32.5184 137.667 31.7984 138.413 31.2384 139.4C30.7051 140.36 30.4384 141.507 30.4384 142.84C30.4384 144.173 30.7051 145.347 31.2384 146.36C31.7984 147.347 32.5184 148.107 33.3984 148.64C34.3051 149.173 35.2651 149.44 36.2784 149.44C37.3184 149.44 38.2918 149.187 39.1984 148.68C40.1051 148.147 40.8251 147.4 41.3584 146.44C41.8918 145.453 42.1584 144.28 42.1584 142.92ZM61.7478 154.36C59.9345 154.36 58.3078 154.04 56.8678 153.4C55.4278 152.733 54.2811 151.84 53.4278 150.72C52.6011 149.6 52.1478 148.36 52.0678 147H57.7078C57.8145 147.853 58.2278 148.56 58.9478 149.12C59.6945 149.68 60.6145 149.96 61.7078 149.96C62.7745 149.96 63.6011 149.747 64.1878 149.32C64.8011 148.893 65.1078 148.347 65.1078 147.68C65.1078 146.96 64.7345 146.427 63.9878 146.08C63.2678 145.707 62.1078 145.307 60.5078 144.88C58.8545 144.48 57.4945 144.067 56.4278 143.64C55.3878 143.213 54.4811 142.56 53.7078 141.68C52.9611 140.8 52.5878 139.613 52.5878 138.12C52.5878 136.893 52.9345 135.773 53.6278 134.76C54.3478 133.747 55.3611 132.947 56.6678 132.36C58.0011 131.773 59.5611 131.48 61.3478 131.48C63.9878 131.48 66.0945 132.147 67.6678 133.48C69.2411 134.787 70.1078 136.56 70.2678 138.8H64.9078C64.8278 137.92 64.4545 137.227 63.7878 136.72C63.1478 136.187 62.2811 135.92 61.1878 135.92C60.1745 135.92 59.3878 136.107 58.8278 136.48C58.2945 136.853 58.0278 137.373 58.0278 138.04C58.0278 138.787 58.4011 139.36 59.1478 139.76C59.8945 140.133 61.0545 140.52 62.6278 140.92C64.2278 141.32 65.5478 141.733 66.5878 142.16C67.6278 142.587 68.5211 143.253 69.2678 144.16C70.0411 145.04 70.4411 146.213 70.4678 147.68C70.4678 148.96 70.1078 150.107 69.3878 151.12C68.6945 152.133 67.6811 152.933 66.3478 153.52C65.0411 154.08 63.5078 154.36 61.7478 154.36ZM88.1847 154L80.6647 144.56V154H75.0647V124.4H80.6647V141.24L88.1047 131.84H95.3847L85.6247 142.96L95.4647 154H88.1847Z" fill="white"/>
<path d="M119.024 142.44C119.024 143.24 118.971 143.96 118.864 144.6H102.664C102.797 146.2 103.357 147.453 104.344 148.36C105.331 149.267 106.544 149.72 107.984 149.72C110.064 149.72 111.544 148.827 112.424 147.04H118.464C117.824 149.173 116.597 150.933 114.784 152.32C112.971 153.68 110.744 154.36 108.104 154.36C105.971 154.36 104.051 153.893 102.344 152.96C100.664 152 99.3441 150.653 98.3841 148.92C97.4507 147.187 96.9841 145.187 96.9841 142.92C96.9841 140.627 97.4507 138.613 98.3841 136.88C99.3174 135.147 100.624 133.813 102.304 132.88C103.984 131.947 105.917 131.48 108.104 131.48C110.211 131.48 112.091 131.933 113.744 132.84C115.424 133.747 116.717 135.04 117.624 136.72C118.557 138.373 119.024 140.28 119.024 142.44ZM113.224 140.84C113.197 139.4 112.677 138.253 111.664 137.4C110.651 136.52 109.411 136.08 107.944 136.08C106.557 136.08 105.384 136.507 104.424 137.36C103.491 138.187 102.917 139.347 102.704 140.84H113.224ZM128.232 149.4H138.112V154H121.872V149.48L131.552 136.44H121.912V131.84H137.992V136.36L128.232 149.4Z" fill="url(#paint1_radial_62_184)"/>
<defs>
<linearGradient id="paint0_linear_62_184" x1="91" y1="4" x2="91" y2="44" gradientUnits="userSpaceOnUse">
<stop stop-color="#9ADB7F"/>
<stop offset="1" stop-color="#6EA95C"/>
</linearGradient>
<radialGradient id="paint1_radial_62_184" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(101.967 164) rotate(-156.341) scale(119.613 93.2542)">
<stop stop-color="#FFB8E0"/>
<stop offset="0.38895" stop-color="#BE9EFF"/>
<stop offset="0.673962" stop-color="#88C0FC"/>
<stop offset="1" stop-color="#86FF99"/>
</radialGradient>
</defs>
</svg>
`;

export default xml;

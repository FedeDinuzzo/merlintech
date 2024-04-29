// import React from 'react'
// import { Application } from 'https://unpkg.com/@splinetool/runtime@1.0.38/build/runtime.js';

// function DistoredSpiral() {
//   const canvas = document.getElementById('canvas3d');
//   const app = new Application(canvas);

//   const onLoad = () => {


//   }

//   app.start([212, 114, 64, 149, 166, 115, 99, 104, 101, 109, 97, 165, 115, 99, 101, 110, 101, 166, 102, 114, 97, 109, 101, 115, 166, 115, 104, 97, 114, 101, 100, 167, 118, 101, 114, 115, 105, 111, 110, 204, 111, 212, 114, 65, 151, 175, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 174, 112, 111, 115, 116, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 163, 102, 111, 103, 167, 111, 98, 106, 101, 99, 116, 115, 171, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 167, 112, 117, 98, 108, 105, 115, 104, 166, 115, 116, 121, 108, 101, 115, 212, 114, 66, 148, 161, 114, 161, 103, 161, 98, 161, 97, 0, 0, 0, 1, 212, 114, 67, 153, 167, 101, 110, 97, 98, 108, 101, 100, 170, 112, 105, 120, 101, 108, 97, 116, 105, 111, 110, 165, 98, 108, 111, 111, 109, 179, 99, 104, 114, 111, 109, 97, 116, 105, 99, 65, 98, 101, 114, 114, 97, 116, 105, 111, 110, 168, 118, 105, 103, 110, 101, 116, 116, 101, 173, 104, 117, 101, 83, 97, 116, 117, 114, 97, 116, 105, 111, 110, 178, 98, 114, 105, 103, 104, 116, 110, 101, 115, 115, 67, 111, 110, 116, 114, 97, 115, 116, 172, 100, 101, 112, 116, 104, 79, 102, 70, 105, 101, 108, 100, 165, 110, 111, 105, 115, 101, 195, 212, 114, 68, 148, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 171, 103, 114, 97, 110, 117, 108, 97, 114, 105, 116, 121, 1, 16, 194, 15, 212, 114, 69, 152, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 169, 105, 110, 116, 101, 110, 115, 105, 116, 121, 169, 98, 108, 117, 114, 83, 99, 97, 108, 101, 178, 108, 117, 109, 105, 110, 97, 110, 99, 101, 84, 104, 114, 101, 115, 104, 111, 108, 100, 178, 108, 117, 109, 105, 110, 97, 110, 99, 101, 83, 109, 111, 111, 116, 104, 105, 110, 103, 170, 107, 101, 114, 110, 101, 108, 83, 105, 122, 101, 1, 16, 195, 203, 63, 230, 102, 102, 102, 102, 102, 102, 1, 203, 63, 208, 0, 0, 0, 0, 0, 0, 203, 63, 208, 0, 0, 0, 0, 0, 0, 161, 53, 212, 114, 70, 148, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 166, 111, 102, 102, 115, 101, 116, 1, 13, 195, 146, 203, 63, 224, 0, 0, 0, 0, 0, 0, 0, 212, 114, 71, 149, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 168, 100, 97, 114, 107, 110, 101, 115, 115, 166, 111, 102, 102, 115, 101, 116, 1, 13, 194, 1, 0, 212, 114, 72, 149, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 163, 104, 117, 101, 170, 115, 97, 116, 117, 114, 97, 116, 105, 111, 110, 1, 13, 195, 203, 64, 24, 90, 135, 63, 253, 116, 102, 203, 63, 224, 0, 0, 0, 0, 0, 0, 212, 114, 73, 149, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 170, 98, 114, 105, 103, 104, 116, 110, 101, 115, 115, 168, 99, 111, 110, 116, 114, 97, 115, 116, 203, 63, 174, 184, 81, 235, 133, 30, 184, 13, 195, 203, 63, 208, 163, 215, 10, 61, 112, 164, 203, 63, 229, 194, 143, 92, 40, 245, 195, 212, 114, 74, 150, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 171, 102, 111, 99, 97, 108, 76, 101, 110, 103, 116, 104, 173, 102, 111, 99, 117, 115, 68, 105, 115, 116, 97, 110, 99, 101, 170, 98, 111, 107, 101, 104, 83, 99, 97, 108, 101, 1, 13, 194, 2, 2, 2, 212, 114, 75, 147, 167, 111, 112, 97, 99, 105, 116, 121, 173, 98, 108, 101, 110, 100, 70, 117, 110, 99, 116, 105, 111, 110, 167, 101, 110, 97, 98, 108, 101, 100, 203, 63, 201, 153, 153, 153, 153, 153, 154, 14, 195, 212, 114, 76, 149, 167, 101, 110, 97, 98, 108, 101, 100, 178, 117, 115, 101, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 165, 99, 111, 108, 111, 114, 164, 110, 101, 97, 114, 163, 102, 97, 114, 195, 195, 212, 114, 77, 147, 161, 114, 161, 103, 161, 98, 1, 1, 1, 203, 64, 143, 87, 229, 96, 65, 137, 55, 203, 64, 145, 166, 235, 133, 30, 184, 82, 212, 3, 0, 145, 212, 114, 78, 148, 162, 102, 105, 162, 105, 100, 164, 100, 97, 116, 97, 168, 99, 104, 105, 108, 100, 114, 101, 110, 203, 63, 239, 198, 244, 192, 12, 113, 209, 217, 36, 97, 50, 49, 56, 102, 99, 99, 51, 45, 50, 55, 54, 98, 45, 52, 57, 98, 57, 45, 98, 52, 56, 53, 45, 52, 57, 48, 51, 55, 102, 100, 49, 52, 102, 53, 102, 212, 114, 79, 220, 0, 22, 164, 116, 121, 112, 101, 166, 115, 116, 97, 116, 101, 115, 166, 101, 118, 101, 110, 116, 115, 167, 118, 105, 115, 105, 98, 108, 101, 171, 114, 97, 121, 99, 97, 115, 116, 76, 111, 99, 107, 167, 112, 104, 121, 115, 105, 99, 115, 172, 112, 97, 116, 104, 83, 110, 97, 112, 112, 105, 110, 103, 168, 112, 111, 115, 105, 116, 105, 111, 110, 168, 114, 111, 116, 97, 116, 105, 111, 110, 165, 115, 99, 97, 108, 101, 172, 104, 105, 100, 100, 101, 110, 77, 97, 116, 114, 105, 120, 166, 99, 108, 111, 110, 101, 114, 175, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 174, 112, 111, 115, 116, 112, 114, 111, 99, 101, 115, 115, 105, 110, 103, 163, 102, 111, 103, 173, 103, 108, 111, 98, 97, 108, 80, 104, 121, 115, 105, 99, 115, 167, 97, 109, 98, 105, 101, 110, 116, 162, 97, 111, 166, 115, 104, 97, 100, 111, 119, 167, 112, 117, 98, 108, 105, 115, 104, 166, 99, 97, 109, 101, 114, 97, 164, 110, 97, 109, 101, 164, 80, 97, 103, 101, 212, 2, 0, 144, 212, 2, 0, 144, 195, 194, 212, 114, 80, 156, 167, 101, 110, 97, 98, 108, 101, 100, 169, 102, 117, 115, 101, 100, 66, 111, 100, 121, 169, 114, 105, 103, 105, 100, 66, 111, 100, 121, 167, 100, 101, 110, 115, 105, 116, 121, 169, 112, 111, 105, 110, 116, 77, 97, 115, 115, 172, 103, 114, 97, 118, 105, 116, 121, 83, 99, 97, 108, 101, 168, 102, 114, 105, 99, 116, 105, 111, 110, 167, 100, 97, 109, 112, 105, 110, 103, 171, 114, 101, 115, 116, 105, 116, 117, 116, 105, 111, 110, 172, 99, 111, 108, 108, 105, 100, 101, 114, 84, 121, 112, 101, 175, 101, 110, 97, 98, 108, 101, 100, 82, 111, 116, 97, 116, 105, 111, 110, 178, 101, 110, 97, 98, 108, 101, 100, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 170, 118, 105, 115, 105, 98, 105, 108, 105, 116, 121, 194, 170, 112, 111, 115, 105, 116, 105, 111, 110, 101, 100, 1, 0, 1, 203, 63, 224, 0, 0, 0, 0, 0, 0, 0, 203, 63, 201, 153, 153, 153, 153, 153, 154, 166, 99, 111, 110, 118, 101, 120, 214, 105, 0, 0, 0, 3, 147, 195, 195, 195, 214, 105, 0, 0, 0, 4, 147, 195, 195, 195, 212, 114, 81, 148, 166, 112, 97, 116, 104, 73, 100, 165, 115, 108, 105, 100, 101, 166, 111, 102, 102, 115, 101, 116, 171, 111, 114, 105, 101, 110, 116, 97, 116, 105, 111, 110, 192, 0, 0, 170, 116, 97, 110, 103, 101, 110, 116, 105, 97, 108, 147, 0, 0, 0, 147, 0, 0, 0, 147, 1, 1, 1, 220, 0, 16, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 192, 66, 0, 0, 0, 1, 67, 195, 68, 1, 16, 194, 15, 69, 1, 16, 195, 203, 63, 230, 102, 102, 102, 102, 102, 102, 1, 203, 63, 208, 0, 0, 0, 0, 0, 0, 203, 63, 208, 0, 0, 0, 0, 0, 0, 161, 53, 70, 1, 13, 195, 146, 203, 63, 224, 0, 0, 0, 0, 0, 0, 0, 71, 1, 13, 194, 1, 0, 72, 1, 13, 195, 203, 64, 24, 90, 135, 63, 253, 116, 102, 203, 63, 224, 0, 0, 0, 0, 0, 0, 73, 203, 63, 174, 184, 81, 235, 133, 30, 184, 13, 195, 203, 63, 208, 163, 215, 10, 61, 112, 164, 203, 63, 229, 194, 143, 92, 40, 245, 195, 74, 1, 13, 194, 2, 2, 2, 75, 203, 63, 201, 153, 153, 153, 153, 153, 154, 14, 195, 76, 195, 195, 77, 1, 1, 1, 203, 64, 143, 87, 229, 96, 65, 137, 55, 203, 64, 145, 166, 235, 133, 30, 184, 82, 212, 114, 82, 146, 170, 117, 115, 101, 80, 104, 121, 115, 105, 99, 115, 167, 103, 114, 97, 118, 105, 116, 121, 194, 246, 212, 114, 83, 147, 167, 101, 110, 97, 98, 108, 101, 100, 165, 99, 111, 108, 111, 114, 169, 105, 110, 116, 101, 110, 115, 105, 116, 121, 195, 77, 203, 63, 234, 122, 122, 122, 122, 122, 122, 203, 63, 234, 122, 122, 122, 122, 122, 122, 203, 63, 234, 122, 122, 122, 122, 122, 122, 203, 63, 232, 0, 0, 0, 0, 0, 0, 212, 114, 84, 149, 169, 111, 99, 99, 108, 117, 115, 105, 111, 110, 169, 97, 111, 70, 117, 108, 108, 82, 101, 115, 166, 114, 97, 100, 105, 117, 115, 164, 98, 105, 97, 115, 167, 97, 111, 67, 111, 108, 111, 114, 194, 194, 205, 1, 0, 203, 63, 224, 0, 0, 0, 0, 0, 0, 77, 203, 63, 201, 25, 25, 25, 25, 25, 26, 203, 63, 201, 25, 25, 25, 25, 25, 26, 203, 63, 201, 25, 25, 25, 25, 25, 26, 212, 114, 85, 145, 177, 115, 111, 102, 116, 83, 104, 97, 100, 111, 119, 81, 117, 97, 108, 105, 116, 121, 163, 108, 111, 119, 212, 114, 86, 146, 170, 112, 108, 97, 121, 67, 97, 109, 101, 114, 97, 177, 103, 97, 109, 101, 67, 111, 110, 116, 114, 111, 108, 79, 98, 106, 101, 99, 116, 175, 112, 101, 114, 115, 111, 110, 97, 108, 32, 99, 97, 109, 101, 114, 97, 192, 212, 114, 87, 220, 0, 18, 166, 115, 116, 97, 116, 101, 115, 166, 101, 118, 101, 110, 116, 115, 167, 118, 105, 115, 105, 98, 108, 101, 171, 114, 97, 121, 99, 97, 115, 116, 76, 111, 99, 107, 167, 112, 104, 121, 115, 105, 99, 115, 172, 112, 97, 116, 104, 83, 110, 97, 112, 112, 105, 110, 103, 168, 112, 111, 115, 105, 116, 105, 111, 110, 168, 114, 111, 116, 97, 116, 105, 111, 110, 165, 115, 99, 97, 108, 101, 172, 104, 105, 100, 100, 101, 110, 77, 97, 116, 114, 105, 120, 166, 99, 108, 111, 110, 101, 114, 163, 102, 97, 114, 164, 116, 121, 112, 101, 171, 112, 101, 114, 115, 112, 101, 99, 116, 105, 118, 101, 172, 111, 114, 116, 104, 111, 103, 114, 97, 112, 104, 105, 99, 162, 117, 112, 177, 105, 115, 85, 112, 86, 101, 99, 116, 111, 114, 70, 108, 105, 112, 112, 101, 100, 172, 116, 97, 114, 103, 101, 116, 79, 102, 102, 115, 101, 116, 144, 144, 195, 194, 80, 170, 118, 105, 115, 105, 98, 105, 108, 105, 116, 121, 195, 170, 112, 111, 115, 105, 116, 105, 111, 110, 101, 100, 1, 0, 1, 203, 63, 224, 0, 0, 0, 0, 0, 0, 0, 203, 63, 201, 153, 153, 153, 153, 153, 154, 166, 99, 111, 110, 118, 101, 120, 147, 195, 195, 195, 147, 195, 195, 195, 81, 192, 0, 0, 170, 116, 97, 110, 103, 101, 110, 116, 105, 97, 108, 147, 0, 0, 205, 3, 232, 147, 0, 0, 0, 147, 1, 1, 1, 220, 0, 16, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 192, 206, 0, 1, 134, 160, 178, 79, 114, 116, 104, 111, 103, 114, 97, 112, 104, 105, 99, 67, 97, 109, 101, 114, 97, 212, 114, 88, 147, 164, 110, 101, 97, 114, 163, 102, 111, 118, 164, 122, 111, 111, 109, 204, 70, 45, 1, 212, 114, 89, 146, 164, 110, 101, 97, 114, 164, 122, 111, 111, 109, 210, 255, 254, 121, 96, 203, 63, 201, 153, 153, 153, 153, 153, 154, 147, 0, 1, 0, 194, 205, 3, 232, 165, 83, 99, 101, 110, 101, 146, 78, 203, 192, 14, 76, 186, 233, 172, 78, 181, 217, 36, 52, 52, 50, 49, 52, 101, 49, 51, 45, 102, 99, 50, 98, 45, 52, 57, 53, 100, 45, 57, 98, 48, 98, 45, 49, 55, 56, 48, 55, 98, 48, 52, 55, 102, 97, 102, 212, 114, 90, 157, 164, 110, 97, 109, 101, 164, 116, 121, 112, 101, 166, 115, 116, 97, 116, 101, 115, 166, 101, 118, 101, 110, 116, 115, 167, 118, 105, 115, 105, 98, 108, 101, 171, 114, 97, 121, 99, 97, 115, 116, 76, 111, 99, 107, 167, 112, 104, 121, 115, 105, 99, 115, 172, 112, 97, 116, 104, 83, 110, 97, 112, 112, 105, 110, 103, 168, 112, 111, 115, 105, 116, 105, 111, 110, 168, 114, 111, 116, 97, 116, 105, 111, 110, 165, 115, 99, 97, 108, 101, 172, 104, 105, 100, 100, 101, 110, 77, 97, 116, 114, 105, 120, 166, 99, 108, 111, 110, 101, 114, 167, 71, 114, 111, 117, 112, 32, 50, 165, 69, 109, 112, 116, 121, 212, 2, 0, 144, 212, 2, 0, 144, 195, 194, 80, 170, 118, 105, 115, 105, 98, 105, 108, 105, 116, 121, 195, 170, 112, 111, 115, 105, 116, 105, 111, 110, 101, 100, 1, 0, 1, 203, 63, 224, 0, 0, 0, 0, 0, 0, 0, 203, 63, 201, 153, 153, 153, 153, 153, 154, 166, 99, 111, 110, 118, 101, 120, 147, 195, 195, 195, 147, 195, 195, 195, 81, 192, 0, 0, 170, 116, 97, 110, 103, 101, 110, 116, 105, 97, 108, 147, 203, 192, 136, 46, 27, 83, 68, 31, 160, 203, 64, 168, 10, 252, 240, 57, 114, 255, 203, 192, 182, 11, 189, 141, 10, 151, 164, 147, 203, 64, 89, 173, 243, 252, 10, 154, 35, 0, 0, 147, 1, 1, 1, 220, 0, 16, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 192, 148, 78, 203, 63, 235, 89, 121, 247, 63, 119, 21, 217, 36, 56, 53, 51, 57, 53, 57, 100, 100, 45, 56, 50, 50, 99, 45, 52, 50, 101, 57, 45, 98, 102, 54, 52, 45, 52, 102, 52, 98, 55, 52, 57, 99, 100, 53, 57, 56, 90, 165, 71, 114, 111, 117, 112, 165, 69, 109, 112, 116, 121, 212, 2, 0, 144, 212, 2, 0, 144, 195, 194, 80, 170, 118, 105, 115, 105, 98, 105, 108, 105, 116, 121, 195, 170, 112, 111, 115, 105, 116, 105, 111, 110, 101, 100, 1, 0, 1, 203, 63, 224, 0, 0, 0, 0, 0, 0, 0, 203, 63, 201, 153, 153, 153, 153, 15…

//   return (
//     <>
//       <canvas id="canvas3d" data-engine="three.js r149" width="996" height="1714" style="display: block; width: 100%; height: 100%;"></canvas>
//     </>
//   )
// }

// export default DistoredSpiral











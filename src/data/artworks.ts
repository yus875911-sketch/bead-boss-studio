import cat from "@/assets/art-cat.jpg";
import cake from "@/assets/art-cake.jpg";
import anime from "@/assets/art-anime.jpg";
import dino from "@/assets/art-dino.jpg";
import mushroom from "@/assets/art-mushroom.jpg";
import sun from "@/assets/art-sun.jpg";

export type Artwork = {
  id: string;
  title: string;
  author: string;
  image: string;
  likes: number;
  category: string;
  ratio: string;
};

export const categories = ["全部", "动物", "动漫", "美食", "植物", "像素风", "节日"];

export const artworks: Artwork[] = [
  { id: "1", title: "橘座大人", author: "豆豆酱", image: cat, likes: 1284, category: "动物", ratio: "4/5" },
  { id: "2", title: "蓝发少女", author: "Pixel林", image: anime, likes: 2431, category: "动漫", ratio: "3/4" },
  { id: "3", title: "草莓蛋糕", author: "甜筒", image: cake, likes: 862, category: "美食", ratio: "1/1" },
  { id: "4", title: "彩虹蘑菇屋", author: "小满", image: mushroom, likes: 1932, category: "像素风", ratio: "4/5" },
  { id: "5", title: "小恐龙阿绿", author: "拼豆怪", image: dino, likes: 745, category: "动物", ratio: "1/1" },
  { id: "6", title: "墨镜太阳", author: "夏日限定", image: sun, likes: 1103, category: "像素风", ratio: "1/1" },
];

export const palette = [
  { code: "H01", name: "珊瑚橘", color: "oklch(0.647 0.185 33.5)", count: 248 },
  { code: "A12", name: "暖阳黄", color: "oklch(0.84 0.15 85)", count: 176 },
  { code: "B07", name: "奶油白", color: "oklch(0.96 0.02 90)", count: 512 },
  { code: "C21", name: "雾霾蓝", color: "oklch(0.68 0.12 245)", count: 134 },
  { code: "D14", name: "薄荷绿", color: "oklch(0.75 0.12 160)", count: 96 },
  { code: "E09", name: "玫瑰粉", color: "oklch(0.78 0.11 12)", count: 88 },
  { code: "F02", name: "墨黑", color: "oklch(0.28 0.01 60)", count: 64 },
];

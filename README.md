# water_resources
 
 ### Follow the rules when you git
  1. feat: 新功能 (feature)
  2. fix: 修補bug
  3. doc: 文件 (documentation)
  4. style: 樣式 (不影響程式碼運行之異動)
  5. refactor: 重構 (未新增功能或修補bug之程式碼異動)
  6. test: 增加測試
  7. chore: 構建過程或輔助工具之異動


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run-script build
```
## data format
```
{
    "kvArea": {
        "titles": {
            "lineone": "標題1",
            "linetwo": "標題2",
            "linethree": "標題3"
        },
        "textArr": ["背景文字"]
    },
    "navList": [
        {
            "name": "選單名稱 (html)",
            "class": "定義class (選)",
            "url": "url或錨點",
            "isAnchor": 是否為錨點 (布林)
        }
    ],
    "slider": [
        {
            "title": "標題",
            "url": "url",
            "image": "圖檔url",
            "description": "描述"
        }
    ]
}
```

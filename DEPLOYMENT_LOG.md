# DEPLOYMENT LOG — koukokuLP12-11

peace LP のデプロイ履歴。

---

## 2026-04-09: Phase D 改修 (広告Bトーン整合) 本番反映

| 項目 | 値 |
|-----|---|
| マージコミット | 2bc3c96 |
| PR | https://github.com/terashimasatoshi/koukokuLP12-11/pull/1 |
| ブランチ | feature/lp-revision-phase-d |
| デプロイ時刻 | 2026-04-09 22:39 JST |
| デプロイ先 | https://koukoku-lp-12-11.vercel.app/ |

### 改修要点
- FV キャッチ書き換え: 広告B「なんか変えたい」トーンに整合
- 店舗別2CTA: 花堂=グリーン主(おすすめ) / 高柳=アウトライン副
- ヘッダー簡素化: 予約ボタン削除、ロゴのみ
- Problem セクション: 漠然層フック追加
- FloatingCTA: FV と同じ店舗階層に統一

### コミット内訳
```
c70f384 refactor(header): remove duplicate booking buttons
77b9a9d feat(cta): add store-specific dual CTAs with hanado priority
ea72ae0 fix(p1): add vague-audience hook + reduce store-choice friction
68e08d9 refactor(hero): rewrite FV for ad-B tone alignment
```

### 効果測定
- 測定開始日: 2026-04-10
- 測定終了予定: 2026-04-14
- 判定基準: CPA ±10% で改善/維持/悪化を判定
- ロールバック: `git revert 2bc3c96 && git push origin main`

### 改修前ベースライン
- 広告A CPA: ¥42.4 / CPM: ¥754
- 広告B CPA: ¥32.1 / CPM: ¥611

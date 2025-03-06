# Documents

<https://documentation.onesignal.com/docs/react-native-expo-sdk-setup>

## SEND API

Tham khảo: <https://documentation.onesignal.com/reference/push-notification>

- URL: <https://onesignal.com/api/v1/notifications>
- Method: POST
- Authorization: Basic MmQ3MTVhNmUtYWMzNy00MWRkLTkwMzgtYzk3NWUyNjM4NmNj
- Body:

```json
{
  "app_id": "fbcc2836-1401-4471-bf99-04f96bce161b",
  "include_player_ids": ["c00390dd-cc20-4800-a0e4-571a6dd18b6f"],
  // "included_segments": [""],
  "large_icon": "ic_stat_onesignal_default",
  "android_group": "group-1",
  "android_group_message": {
    "en": "Bạn có $[notif_count] thông báo mới"
  },
  // "collapse_id": "100",
  "thread_id": "100480",
  "summary_arg_count": 1,
  "summary_arg": "Nhà thuốc Phước Thiện",
  "data": {
    "foo": "bar"
  },
  "headings": {
    "en": "Thông báo"
  },
  "contents": {
    "en": "Nội dung thông báo từ Nhà thuốc Phước Thiện"
  },
  "big_picture": "https://images.unsplash.com/photo-1571713343936-b27b7bedddab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "ios_attachments": {
    "id1": "https://images.unsplash.com/photo-1571713343936-b27b7bedddab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  "ios_badgeCount": "1",
  "ios_badgeType": "Increase",
  "buttons": [
    {
      "id": "id1",
      "text": "first button",
      "icon": "ic_menu_share"
    },
    {
      "id": "id2",
      "text": "second button",
      "icon": "ic_menu_send"
    }
  ]
}
```

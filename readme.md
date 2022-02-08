# Usage

```ts
import ezew from "ezew";

interface CommentData {
    username: string;
    text: string;
    date: string;
}

const updateTemplate = (commentData : CommentData)=>{
    // ...
}

const updateAlarmTemplate = (commentData: CommentData)=>{
    // ...
}

ezew.addEventWatcher("AddCommentData", updateTemplate);
ezew.addEventWatcher("AddCommentData", updateAlarmTemplate);

function updateComment(){
    // ...
    ezew.dispatchEvent("AddCommentData", commentData);
}

updateCommentData()
```

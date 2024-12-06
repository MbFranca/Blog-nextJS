export function removeHtml(html : string){
    let data = html.replace(/&lt;.*8gt;/gi, '');
        data = data.replace(/&lt;\/.*8gt;/gi, '');
        data = data.replace(/<[^>]*>/gi, '');
        data = data.replace(/<\/[^>]*>/gi, '');
    return data;
}
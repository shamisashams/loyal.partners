<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>{{$meta_title}}</title>
    <meta name="description"
          content="{{ $meta_description }}">
    <meta name="keywords" content="{{ $meta_keyword }}">
    <meta property="og:title" content="{{ $og_title }}">
    <meta property="og:description" content="{{ $og_description }}">
    @if($image)
        <meta property="og:image" content={{"/".$image->path."/".$image->title}}>
    @endif
    <meta property="og:url" content="{{ request()->fullUrl() }}">
    <meta property="og:type" content="page">
    <link href="{{ mix('/css/App.css') }}" rel="stylesheet"/>
{{--    @if(app()->getLocale()=="ge")--}}
{{--        <link href="{{ mix('/css/AppGeo.css') }}" rel="stylesheet"/>--}}
{{--    @elseif(app()->getLocale()=="en")--}}
{{--        <link href="{{ mix('/css/AppEng.css') }}" rel="stylesheet"/>--}}
{{--    @endif--}}
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>


<script>
    let sharedData = {!! json_encode($page["props"]["localizations"]??null) !!};
    console.log(sharedData);
    function __(key, replace = {}) {
        let translation = sharedData?sharedData[key] || key : key;

        Object.keys(replace).forEach(function (key) {
            translation = translation.replace(":" + key, replace[key]);
        });

        return translation;
    }
</script>
@inertia
</body>

</html>

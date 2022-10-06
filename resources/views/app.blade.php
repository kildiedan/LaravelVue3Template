<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel 9 & Vue 3 template</title>

	@production
	<link rel="manifest" href="/app.manifest">
	@php
	$manifest = json_decode(file_get_contents(public_path('js/manifest.json')), true);
	@endphp
	@foreach ($manifest as $export)
	@if (isset($export['css']))
	@foreach ($export['css'] as $url)
	<link rel="stylesheet" href="/js/{{ $url }}" />
	@endforeach
	@endif
	@endforeach
	@endproduction
</head>

<body>
	<div id="app"></div>

	@production
	<script type="module" src="/js/{{ $manifest['resources/js/app.js']['file'] }}"></script>
	@else
	<script type="module" src="http://localhost:3000/@@vite/client"></script>
	<script type="module" src="http://localhost:3000/resources/js/app.js"></script>
	@endproduction
</body>

</html>
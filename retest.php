<!DOCTYPE html>
<html>
<head>
	<title>Bouttons</title>
	<link rel="stylesheet" type="text/css" href="css/css.css">
	<meta charset="utf-8">
</head>

<body>

<button mat-icon-button [matMenuTriggerFor]="menu">
  <mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
  <button mat-menu-item>
    <mat-icon>dialpad</mat-icon>
    <span>Redial</span>
  </button>
  <button mat-menu-item disabled>
    <mat-icon>voicemail</mat-icon>
    <span>Check voicemail</span>
  </button>
  <button mat-menu-item>
    <mat-icon>notifications_off</mat-icon>
    <span>Disable alerts</span>
  </button>
</mat-menu>

<p>
Aujourd'hui, nous sommes le :
<?php echo date('d/m/Y h:i:s');?>

</p>

</body>
</html>
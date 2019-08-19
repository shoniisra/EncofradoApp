import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  // },
  // {
  //   path: 'home',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('src/app/pages/home/home.module').then(m => m.HomePageModule)
  //     }
  //   ]
  // },

  {
    path: "list",
    loadChildren: () => import("./list/list.module").then(m => m.ListPageModule)
  },
  {
    path: "archivo",
    loadChildren: "./pages/archivo/archivo.module#ArchivoPageModule"
  },
  {
    path: "contrato",
    loadChildren: "./pages/contrato/contrato.module#ContratoPageModule"
  },
  { path: "nuevo", loadChildren: "./pages/nuevo/nuevo.module#NuevoPageModule" },
  {
    path: "contrato/:id",
    loadChildren: "./pages/contrato/contrato.module#ContratoPageModule"
  },
  {
    path: "nuevo/:id",
    loadChildren: "./pages/nuevo/nuevo.module#NuevoPageModule"
  },
  { path: "home", loadChildren: "./pages/home/home.module#HomePageModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

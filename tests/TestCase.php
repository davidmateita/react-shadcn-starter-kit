<?php

declare(strict_types=1);

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Config;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutVite(); // Fake Vite for tests - for GH Actions

        Config::set('filesystems.disks.public.root', storage_path('app/public_test'));
        Config::set('filesystems.disks.local.root', storage_path('app/private_test'));
    }
}
